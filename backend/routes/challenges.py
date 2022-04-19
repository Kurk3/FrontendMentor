from flask import Blueprint

challenges = Blueprint('challenges', __name__)

@challenges.route('/challanges')
def challenges_main():
    return 'challanges'

@challenges.route('/challanges/calculator')
def challenges_calculator():
    return 'challanges calculator'


