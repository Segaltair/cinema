import axios from "axios";
import {toast} from "react-toastify";
import {ACCESS_TOKEN} from "../utils/constants";

axios.interceptors.response.use(null, error => {
    const isError = error.response && error.response.status >= 400 && error.response.status < 500;
    const code = error.response && error.response.status ? error.response.status : -1;
    if (isError) {
        if (code !== 401) {
            if (error.response && error.response.status && error.response.status && error.response.data.message) {
                toast(error.response.status + ": " + error.response.data.message)
            } else {
                toast("Unexpected error");
                console.log(error);
            }
        }
    }

    return Promise.reject(error);
});

function getConfig() {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        return {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(ACCESS_TOKEN)
            }
        }
    } else {
        return null;
    }
}

export function httpPost(url, request) {
    return axios.post(url, request, getConfig());
}

export function httpGet(url) {
    return axios.get(url, getConfig());
}

export function httpDelete(url) {
    return axios.delete(url, getConfig());
}

export function httpPut(url, request) {
    return axios.put(url, request, getConfig())
}