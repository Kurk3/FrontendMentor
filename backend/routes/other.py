from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def homepage():
    return render_template('home/home_before_login.html')

@views.route('/contact')
def contact():
    return 'Contact Page'

@views.route('/user_data', method=['GET', 'POST'])
def user_data():
    return "user_data"






