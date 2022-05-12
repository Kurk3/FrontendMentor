from flask import Blueprint, render_template

forum = Blueprint('forum', __name__)

@forum.route('/forum', methods=['GET', 'POST'])
def forum_route():
    return render_template('forum/forum_posts.html')




