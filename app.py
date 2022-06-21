from flask import Flask, render_template

from constructor import create_app

app = create_app()

if __name__ == '__main__':
    use_reloader = True
    app.run(debug=True)

