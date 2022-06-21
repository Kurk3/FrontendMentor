from flask import Blueprint, render_template
from flask_login import login_required, current_user

permiss = Blueprint('permiss', __name__)


@permiss.route('/', methods=['GET', 'POST'])
def homepage_before():
    return render_template('home/home_before_login.html', user=current_user)


@permiss.route('/homepage_after', methods=['GET', 'POST'])
@login_required
def homepage_after():
    return render_template('home/home_after_login.html', user=current_user)


@permiss.route('/contact', methods=['GET', 'POST'])
def contact_page():
    return render_template('contact/contact.html', user=current_user)


@permiss.route('/user_data', methods=['GET', 'POST'])
@login_required
def user_data():
    return render_template('admin_pages/user_data.html', user=current_user)


@permiss.route('/made_by', methods=['GET', 'POST'])
def made_by():
    return render_template('contact/made_by.html', user=current_user)
