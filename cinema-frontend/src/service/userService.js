import {httpPost} from "./httpService";
import {apiUrl} from "../config";
import {setUsernameAndToken} from "../utils/storage";
import {toast} from "react-toastify";

const apiEndpoint = apiUrl + "/auth/";

export function authenticate(user, props) {
    httpPost(apiEndpoint + "signin", user).then(response => {
        setUsernameAndToken(user.usernameOrEmail, response.data.accessToken);
        props.history.push("/");
    }).catch(e => {
        if (e.response && e.response.status === 401) {
            toast("Wrong password or username!");
        }
    });
}

export function register(user) {
    return httpPost(apiEndpoint + "signup", user);
}