import axios from "axios"

const instance = axios.create({
    // API URL (cloud function)
    baseURL: "http://localhost:5001/website-906a4/us-central1/api"
})

export default instance