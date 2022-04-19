from flask import Blueprint, render_template

permiss = Blueprint('permiss', __name__)

@permiss.route('/', methods=['GET', 'POST'])
def homepage():
    return "home"

@permiss.route('/contact', method=['GET', 'POST'])
def contact_page():
    return "home"

@permiss.route('/user_data', method=['GET', 'POST'])
def user_data():
    return "home"

@permiss.route('/made_by', method=['GET', 'POST'])
def made_by():
    return "home"
