import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:44325/"
});

export default api;