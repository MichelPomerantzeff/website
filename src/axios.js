import axios from "axios"

const instance = axios.create({
    // API URL (cloud function)
    baseURL: "https://us-central1-website-906a4.cloudfunctions.net/api"

    // "http://localhost:5001/website-906a4/us-central1/api"


})

export default instance