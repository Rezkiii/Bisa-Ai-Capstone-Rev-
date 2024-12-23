from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

auth = Blueprint('auth', __name__)
db = None 

# Initialize the Limiter
limiter = Limiter(
    get_remote_address,
    default_limits=["200 per day", "50 per hour"]  # Global limits
)

def init_app(database):
    global db
    db = database

# Fungsi login_required untuk memeriksa apakah pengguna telah login
def login_required(f):
    """Decorator untuk memeriksa apakah pengguna telah login."""
    def decorated_function(*args, **kwargs):
        if 'username' not in session:
            return redirect(url_for('auth.login'))  # Mengarah ke login
        return f(*args, **kwargs)
    return decorated_function

@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        # Hash password sebelum disimpan
        hashed_password = generate_password_hash(password)

        if db.register_user(username, hashed_password):  # Simpan password yang sudah di-hash
            flash('Registration successful! Please log in.')
            return redirect(url_for('auth.login'))
        else:
            flash('Username already exists!')
    
    return render_template('register.html')

@auth.route('/login', methods=['GET', 'POST'])
@limiter.limit("5 per minute")  # Limit to 5 login attempts per minute
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        user = db.get_user(username)
        if user and check_password_hash(user['password'], password): 
            session['username'] = username
            flash('Login berhasil!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Username atau password salah!', 'error')
    
    return render_template('login.html')

@auth.route('/logout')
def logout():
    """Fungsi untuk logout pengguna."""
    session.pop('username', None)  
    flash('You have been logged out.')
    return redirect(url_for('auth.login'))

@auth.errorhandler(429)
def ratelimit_error(e):
    return jsonify(error="ratelimit exceeded", message=str(e.description)), 429