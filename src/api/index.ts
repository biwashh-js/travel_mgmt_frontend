import axios from "axios";

const instance = axios.create({
    baseURL:'https://travel-mgmt.onrender.com/api'
})

export default instance