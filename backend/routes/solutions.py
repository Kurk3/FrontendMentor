from flask import Blueprint

solution = Blueprint('solution', __name__)


@solution.route('/solutions', methods=['GET', 'POST'])
def main_solution():
    return "Solutions"

