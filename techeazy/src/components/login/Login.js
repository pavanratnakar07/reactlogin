import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AuthService from '../../services/AuthService'; // Adjust the path as needed

const Login = ({ onSignUpClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await AuthService.login(email, password);
            toast.success("Login successful! Redirecting...", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: false,
                pauseOnHover: false,
            });

            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            setErrorMessage("Login failed! Please check your credentials.");
            toast.error("Login failed! Please check your credentials.", {
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
        <div className="form-container sign-in-container">
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <span>or use your email for login</span>
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
                <button type="submit">Sign In</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
