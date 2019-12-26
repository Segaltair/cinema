import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {authenticate} from "../service/userService";

class LoginForm extends Form {
    state = {
        data: {
            login: "",
            password: ""
        },
        errors: []
    };
    schema = {
        login: Joi.string().required().label("Login"),
        password: Joi.string().required().label("Password")
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("login", "Login")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Sign in")}
                </form>
            </div>
        );
    }

    doSubmit = async () => {
        await authenticate(this.state.data);
    }
}

export default LoginForm;