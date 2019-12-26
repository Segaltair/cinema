import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoint = apiUrl + "/login";

export function authenticate(user) {
    return http.post(apiEndpoint, user);
}