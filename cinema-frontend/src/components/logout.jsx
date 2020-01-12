import React, {Component} from "react"
import {setUsernameAndToken} from "../utils/storage";

export default class Logout extends Component {
    render() {
        setUsernameAndToken(null, null);
        return (
            <div>Logout successful!</div>
        );
    }
}