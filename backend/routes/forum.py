from flask import Blueprint, render_template, request, redirect, url_for
from flask_login import login_required, current_user
import datetime

from backend.database.create_db import db
from backend.database.tables import Posts, Comments

forum = Blueprint('forum', __name__)


@forum.route('/forum', methods=['GET', 'POST'])
@login_required
def forum_route():
    posts = Posts.query.all()

    return render_template('forum/forum_posts.html',
                           user=current_user
                           , posts=posts)


@forum.route('/create_comment/<post_id>', methods=['GET', 'POST'])
@login_required
def create_comment(post_id):

    comment = request.form.get('comment-add-answer')
    posts = Posts.query.filter_by(id=post_id).first()

    if not comment:
        print('Comment cannot be empty')
    else:

        posts = Posts.query.filter_by(id=post_id).first()
        time_comment = datetime.datetime.now()
        create_post_date = time_comment.strftime("%Y.%d.%m")

        if posts:

            comment = Comments(comment=comment,
                               author=current_user.first_name,
                               date=create_post_date,
                               user_id=current_user.id,
                               post_id=post_id)

            db.session.add(comment)
            db.session.commit()
            return redirect(url_for('forum.forum_route',
                                    user=current_user,
                                    posts=posts))
        else:
            print('Post does not exist')

    return redirect(url_for('forum.forum_route',
                            user=current_user,
                            posts=posts))


@forum.route('/create-post', methods=['GET', 'POST'])
@login_required
def create_post_route():
    create_post_question = request.form.get('create-post-question')
    create_post_text = request.form.get('create-post-text')
    create_post_author = current_user.first_name

    time = datetime.datetime.now()
    # change the str
    create_post_date = time.strftime("%Y.%d.%m")
    user_id = current_user.id

    if request.method == 'POST':

        if create_post_question == '' or create_post_text == '':
            print('You dont fill in all fields')
        elif len(create_post_question) > 400:
            print('Question is too long')
        elif len(create_post_text) > 10000:
            print('Text is too long')
        elif len(create_post_text) < 10:
            print('Text is too short')
        elif len(create_post_question) < 10:
            print('Question is too short')
        else:
            create_post_data = Posts(question=create_post_question,
                                     text=create_post_text,
                                     author=create_post_author,
                                     date=create_post_date,
                                     user_id=user_id)

            db.session.add(create_post_data)
            db.session.commit()
            print('post bol vytvoreny')
            return redirect(url_for('forum.forum_route'))
    return render_template('forum/create_post.html', user=current_user)
