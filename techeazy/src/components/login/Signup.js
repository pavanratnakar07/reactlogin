import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import AuthService from '../../services/AuthService'; // Adjust the path as needed

const Signup = ({ onSignInClick }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            await AuthService.signup(name, email, password);
            toast.success(`Welcome, ${name}! Your account has been created successfully!`, {
                position: "top-center", // Position of the toast
                autoClose: 2000, // Automatically close after 2 seconds
                hideProgressBar: true, // Hide the progress bar
                closeOnClick: true, // Close on click
                draggable: false, // Disable dragging to close
                pauseOnHover: false, // Do not pause on hover
            });
            setTimeout(onSignInClick, 2000); // Redirect to sign in after 2 seconds
        } catch (error) {
            setErrorMessage("Registration failed! Please try again."); // Show error message
            toast.error("Registration failed! Please try again.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: false,
                pauseOnHover: false,
            });
            console.error(error);
        }
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleSignup}>
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p>
                    Already have an account? 
                    <a href="#" onClick={onSignInClick}>Sign In</a>
                </p>
            </form>
            <ToastContainer /> {/* Add the ToastContainer to your component */}
        </div>
    );
};

export default Signup;
