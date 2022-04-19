from flask import Blueprint

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    return "login"

@auth.route('/logout', methods=['GET', 'POST'])
def logout():
    return "logout"

@auth.route('/register', methods=['GET', 'POST'])
def register():
    return "register"

