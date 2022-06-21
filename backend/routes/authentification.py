from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user, login_user, logout_user
from werkzeug.security import generate_password_hash, check_password_hash

from backend.database.create_db import db
from backend.database.tables import Users

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('login-email')
        login_password = request.form.get('login-password')

        user = Users.query.filter_by(email=email).first()

        if user:
            if check_password_hash(user.password, login_password):
                print('prihlasenie bolo uspesne')
                login_user(user, remember=True)
                return render_template('home/home_after_login.html', user=current_user)

            else:
                print('zle heslo skus znovu')
        else:
            print('tento uzivatel neexistuje')

    return render_template('authentification/login.html', user=current_user)


@auth.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':

        register_username = request.form.get('register-username')
        register_password = request.form.get('register-first-password')
        register_password_confirm = request.form.get('register-confirm-password')
        register_email = request.form.get('register-email')
        register_best_friend = request.form.get('register-best-friend')

        user = Users.query.filter_by(email=register_email).first()

        if user:
            flash('Email already in use.', category='error')
            print('email sa uz pouziva pouzi ini email')
        elif register_username == '':
            flash('Please enter a username', 'error')
            print('nezadali ste username')
        elif len(register_username) < 4:
            flash('Username must be between 3 and 16 characters', 'error')
            print('username musi byt dlhsie')
        elif register_password == '':
            flash('Please enter a password', 'error')
            print('nezadali ste heslo')
        elif 8 <= len(register_password) <= 16:
            flash('Password must be between 8 and 16 characters', 'error')
            print('heslo musi byt medzi 8 a 16 charakterem')
        elif register_password != register_password_confirm:
            flash('Passwords do not match', 'error')
            print('hesla sa nezhoduju')
        elif register_email == '':
            flash('Please enter an email', 'error')
            print('nezadali ste email')
        elif register_email.count('@') != 1 or register_email.count('.') != 1:
            flash('Please enter a valid email', 'error')
            print('nezadali ste validny email')
        elif register_best_friend == '':
            flash('Please enter your best friend', 'error')
            print('nezadali ste best friend')
        else:
            flash('You have successfully registered', 'success')
            print('user has been registered successfully')

            registered_user = Users(first_name=register_username,
                                    password=generate_password_hash(
                                        register_password, method='sha256'),
                                    email=register_email,
                                    best_friend=register_best_friend)

            db.session.add(registered_user)
            db.session.commit()
            return render_template('home/home_after_login.html', user=current_user)

    return render_template('authentification/register.html', user=current_user)


@auth.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():

    email_change_password = request.form.get('email-change-password')
    new_password_change_password = request.form.get('new-password-change-password')
    password_confirm_change_password = request.form.get('password-confirm-change-password')
    friends_name_change_password = request.form.get('friends-name-change-password')

    email_exist = db.session.query(db.exists().where(Users.email == email_change_password)).scalar()
    friends_name_exist = db.session.query(db.exists().where(Users.best_friend == friends_name_change_password)).scalar()

    if request.method == 'POST':
        if email_change_password == '':
            flash('Please enter an email', 'error')
            print('nezadali ste email')
        elif not email_exist:  # same as false
            flash('Please enter a valid email', 'error')
            print('tento email neexistuje')
        elif not friends_name_exist:
            flash('Please enter a valid friends name', 'error')
            print('tento friends name neexistuje')
        elif new_password_change_password == '':
            print('nezadali ste heslo')
        elif new_password_change_password != password_confirm_change_password:
            flash('Passwords do not match', 'error')
            print('hesla sa nezhoduju')
        elif friends_name_change_password == '':
            flash('Please enter your best friend', 'error')
            print('nezadali ste best friend')
        else:
            print('you pass statements')

            user_to_check = Users.query.filter_by(email=email_change_password).first()

            if user_to_check.best_friend == friends_name_change_password \
                    and user_to_check.email == email_change_password:

                hashed_password_new = generate_password_hash(new_password_change_password, method='sha256')
                user_to_check.password = hashed_password_new
                db.session.commit()
                print('You have successfully changed your password without current_user')
                return redirect(url_for('auth.login'))
            else:
                print('You have entered wrong data')

    return render_template('authentification/edit_password.html', user=current_user)
