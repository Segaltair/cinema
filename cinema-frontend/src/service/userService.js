import {httpPost} from "./httpService";
import {apiUrl} from "../config";
import {ACCESS_TOKEN} from "../utils/constants";

const apiEndpoint = apiUrl + "/auth/";

export function authenticate(user) {
    httpPost(apiEndpoint + "signin", user).then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
    });
}

export function register(user) {
    return httpPost(apiEndpoint + "signup", user);
}