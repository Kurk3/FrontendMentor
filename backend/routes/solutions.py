from flask import Blueprint, render_template

solution = Blueprint('solution', __name__)


@solution.route('/solutions', methods=['GET', 'POST'])
def main_solution():
    return render_template('solutions/solution_main_page.html')

