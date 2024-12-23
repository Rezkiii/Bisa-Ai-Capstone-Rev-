# functions/utils.py
from flask import session, redirect, url_for

def login_required(f):
    """Decorator untuk memeriksa apakah pengguna telah login."""
    def decorated_function(*args, **kwargs):
        if 'username' not in session:
            return redirect(url_for('auth.login'))  # Mengarah ke login
        return f(*args, **kwargs)
    return decorated_function
