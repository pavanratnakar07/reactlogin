// src/components/login/LoginSignupContainer.js

import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './LoginSignup.css';

const LoginSignupContainer = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleSignUpClick = () => {
        setIsSignup(true);
    };

    const handleSignInClick = () => {
        setIsSignup(false);
    };

    return (
        <div className={`container ${isSignup ? 'right-panel-active' : ''}`}>
            <Login onSignUpClick={handleSignUpClick} />
            <Signup onSignInClick={handleSignInClick} />
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupContainer;
