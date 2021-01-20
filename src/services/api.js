import axios from "axios";

export const API_URL = "https://www.googleapis.com/books/v1/";

const api = axios.create({ baseURL: API_URL });

export default api;
