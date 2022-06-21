from flask import Blueprint, render_template
from flask_login import login_required, current_user

solution = Blueprint('solution', __name__)

@solution.route('/solutions', methods=['GET', 'POST'])
@login_required
def main_solution():
    return render_template('solutions/solution_main_page.html',user=current_user)

