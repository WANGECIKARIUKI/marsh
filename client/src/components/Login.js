import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from './firebaseConfig';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        try {
            setLoading(true);
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("Login successfully");
            navigate('/Demo'); // Redirect after successful login
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setError('Please enter your email to reset your password.');
            return;
        }

        try {
            await firebase.auth().sendPasswordResetEmail(email);
            alert('Password reset email sent! Check your inbox.');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="main-container-login">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="header">
                    <h1>Log in</h1>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="box">
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-label="Email"
                    />
                </div>
                <div className="box password-box">
                    <input
                        type={visible ? 'text' : 'password'}
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-label="Password"
                    />
                    <span className="icons-span" onClick={() => setVisible(!visible)}>
                        {visible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>
                <p style={{ textAlign: "center" }}>
                    <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
                </p>
                <p style={{ textAlign: "left" }}>
                    No account yet?{' '}
                    <Link to="/Signup">Sign up</Link>
                </p>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
    
}

export default Login;
