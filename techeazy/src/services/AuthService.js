import axios from 'axios';

const API_URL = 'http://localhost:8080/api/'; // Adjust the base URL as needed

const signup = (name, email, password) => {
    return axios.post(API_URL + 'signup', {
        name,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login', {
        email,
        password,
    });
};

export default {
    signup,
    login,
};
