import os
from os import path

from flask import Flask, request, redirect, render_template, url_for
from flask_login import LoginManager, login_required, current_user
from werkzeug.utils import secure_filename

from backend.database.create_db import create_engine, DB_NAME, db
from backend.database.tables import Upload
from backend.routes.challenges import challenges

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])


def create_app():
    app = Flask(__name__)
    create_engine(app)

    UPLOAD_FOLDER = 'static/uploads/'
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

    from backend.routes.authentification import auth
    from backend.routes.challenges import challenges
    from backend.routes.forum import forum
    from backend.routes.solutions import solution
    from backend.routes.contact import permiss

    app.register_blueprint(auth, url_prefix='/')
    app.register_blueprint(challenges, url_prefix='/')
    app.register_blueprint(forum, url_prefix='/')
    app.register_blueprint(permiss, url_prefix='/')
    app.register_blueprint(solution, url_prefix='/')

    from backend.database.tables import Users

    create_tables(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return Users.query.get(int(id))

    return app


def create_tables(app):
    if not path.exists('backend/' + DB_NAME):
        print('table was created!')
        db.create_all(app=app)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@challenges.route('/create_challenge', methods=(['POST']))
@login_required
def upload_file():
    name_of_the_challenge = request.form.get('name-of-the-challenge')
    info_about_the_challenge = request.form.get('info-about-challenge')
    difficulty_of_challenge = request.form.get('difficulty-of-challenge')
    github_link = request.form.get('github-link-challenge')

    if 'file' not in request.files:
        print('No file part')
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        print('No selected file')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join('static/uploads/', filename))
        print('file is uploaded and displayed!')

        safe_image_object = Upload(filename=filename,
                                   project_name=name_of_the_challenge,
                                   project_information=info_about_the_challenge,
                                   difficulty=difficulty_of_challenge,
                                   github_link=github_link)

        db.session.add(safe_image_object)
        db.session.commit()
        print('file is saved in database')
    else:
        print('file is not allowed')

        return render_template('challenges/create_challenge.html',
                               user=current_user)

    return render_template('challenges/create_challenge.html',
                           user=current_user)


@challenges.route('/display/<filename>')
def display_image(filename):



    return redirect(url_for('static', filename='uploads/' + filename, ), code=301)
