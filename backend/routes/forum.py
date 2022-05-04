from flask import Blueprint

forum = Blueprint('forum', __name__)

@forum.route('/forum')
def forum_route():
    return 'forum'




