from flask_login import UserMixin
from sqlalchemy import func

from backend.database.create_db import db


class Users(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    best_friend = db.Column(db.String(150))
    posts = db.relationship('Posts', backref='user', passive_deletes=True)
    comments = db.relationship('Comments', backref='user', passive_deletes=True)


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(400))
    text = db.Column(db.String(10000))
    date = db.Column(db.String(300))
    author = db.Column(db.String(150))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    comments = db.relationship('Comments', backref='posts', passive_deletes=True)


class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(400))
    date = db.Column(db.String(300))
    author = db.Column(db.String(150))
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id', ondelete="CASCADE"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


class Upload(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(100))
    project_name = db.Column(db.String(400))
    project_information = db.Column(db.String(1000))
    difficulty = db.Column(db.String(100))
    github_link = db.Column(db.String(1000))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
