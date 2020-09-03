import axios from "axios";

export const BASE_URL = "https://api.github.com";

export default axios.create({
    baseURL: BASE_URL
})