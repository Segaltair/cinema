import {ACCESS_TOKEN, USERNAME} from "./constants";

export function getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
}

export function setUsernameAndToken(username, token) {
    if (username === null) {
        localStorage.removeItem(USERNAME);
    } else {
        localStorage.setItem(USERNAME, username);
    }
    if (token === null) {
        localStorage.removeItem(ACCESS_TOKEN);
    } else {
        localStorage.setItem(ACCESS_TOKEN, token);
    }
}

export function getUsername() {
    const username = localStorage.getItem(USERNAME);
    if (username) {
        return username;
    } else {
        return "Guest";
    }
}

export function isAuth() {
    const token = localStorage.getItem(ACCESS_TOKEN);
    return !!token;
}