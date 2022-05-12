from flask import Flask


def create_app():

    app = Flask(__name__)

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

    return app
