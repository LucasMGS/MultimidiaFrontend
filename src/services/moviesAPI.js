import axios from 'axios';

const api = axios.create({
    // baseURL:'https://localhost:44325',
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;