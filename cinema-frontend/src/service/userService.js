import {httpPost} from "./httpService";
import {apiUrl} from "../config";
import {ACCESS_TOKEN} from "../utils/constants";
import {toast} from "react-toastify";

const apiEndpoint = apiUrl + "/auth/";

export function authenticate(user) {
    httpPost(apiEndpoint + "signin", user).then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
    }).catch(e => {
        if (e.response && e.response.status === 401) {
           toast("Wrong password or username!");
        }
    });
}

export function register(user) {
    return httpPost(apiEndpoint + "signup", user);
}