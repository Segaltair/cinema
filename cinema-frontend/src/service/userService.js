import {httpPost} from "./httpService";
import {setUsernameAndToken} from "../utils/storage";
import {toast} from "react-toastify";
import {AUTH_URL} from "../utils/constants";

export function authenticate(user, props) {
    httpPost(AUTH_URL + "signin", user).then(response => {
        setUsernameAndToken(user.usernameOrEmail, response.data.accessToken);
        props.history.push("/");
    }).catch(e => {
        if (e.response && e.response.status === 401) {
            toast("Wrong password or username!");
        }
    });
}

export function register(user) {
    return httpPost(AUTH_URL + "signup", user);
}