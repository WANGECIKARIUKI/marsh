import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            setLoading(true); // Set loading state
            const result = await signInWithPopup(firebase.auth(), provider);
            // Handle successful Google sign-in
            alert('Google sign-in successful!');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        setLoading(true); // Set loading state

        // Simple form validation
        if (!name || !email || !password) {
            setError('Please fill in all fields.');
            setLoading(false);
            return;
        }

        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            if (userCredential) {
                alert('Account created successfully');
                // Optionally, you can save user details in the database here
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="main-container-signup">
            <div className="header">
                <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="box">
                    <input
                        type="text"
                        value={name}
                        placeholder="Username"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="box">
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="box">
                    <input
                        type="password" // Changed to always be a password input
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <p>
                    Already have an account?{' '}
                    <Link to="/Login">Sign in</Link>
                </p>
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
                <span>or</span>
                <button type="button" onClick={handleGoogleSignIn} disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign up with Google'}
                </button>
            </form>
        </div>
    );
}

export default Signup;
