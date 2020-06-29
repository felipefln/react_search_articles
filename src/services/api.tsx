import axios from "axios";

const api = axios.create({
    baseURL: "https://calm-tundra-76195.herokuapp.com/api/search",
});

export default api;
