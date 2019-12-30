import React from "react";
import {register} from "../service/userService"
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
    state = {
        data: {
            username: "wqe",
            password: "qwe",
            email: "qwe"
        },
        errors: []
    };
    schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(5).label("Password"),
        username: Joi.string().required().label("Username")
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("email", "Email")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }

    doSubmit = async () => {
        await register(this.state.data);
    }
}

export default RegisterForm;