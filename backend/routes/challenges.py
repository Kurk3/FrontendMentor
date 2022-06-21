from flask import Blueprint, render_template, request, url_for, make_response
from flask_login import login_required, current_user
from werkzeug.utils import secure_filename, redirect

from backend.database.tables import Upload

challenges = Blueprint('challenges', __name__)


@challenges.route('/challenges', methods=['GET', 'POST'])
@login_required
def challenges_main():
    challenge = Upload.query.all()

    # convert the image to be able to display from database

    return render_template('challenges/challenges.html',
                           user=current_user,
                           challenges=challenge)


@challenges.route('/create_challenge', methods=['GET'])
@login_required
def create_challenge():
    return render_template('challenges/create_challenge.html',
                           user=current_user)


