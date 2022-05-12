from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('authentification/login.html')

@auth.route('/logout', methods=['GET', 'POST'])
def logout():
    return render_template('authentification/login.html')


@auth.route('/register', methods=['GET', 'POST'])
def register():
    return render_template('authentification/register.html')


@auth.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    return render_template('authentification/edit_password.html')
