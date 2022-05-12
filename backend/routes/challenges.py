from flask import Blueprint, render_template

challenges = Blueprint('challenges', __name__)

@challenges.route('/challanges', methods=['GET', 'POST'])
def challenges_main():
    return render_template('challenges/challenges.html')



