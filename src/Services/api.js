import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:7064',
});

export default api;