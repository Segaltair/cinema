import React from 'react';
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import {ToastContainer} from "react-toastify";
import {Redirect, Route, Switch} from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "./components/registerForm";

function App() {
    return (
        <React.Fragment>
            <ToastContainer/>
            <NavBar/>
            <main className="container">
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/movies/:id" component={MovieForm}/>
                    <Route path="/movies" component={Movies}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/rentals" component={Rentals}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Redirect from="/" exact to="/movies"/>
                    <Redirect to="/not-found"/>
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
