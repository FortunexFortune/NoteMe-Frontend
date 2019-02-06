import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './simple.css';
import Delete from "./Delete"
import Update from "./Update"
import bcrypt from 'bcryptjs';
import * as constants from "./constants.js";



class Form extends Component {
    constructor() {
        super();
        this.state = {
            logged_user: null,
            loginStatus: false,
            userName: null,
            pwd: null,
            message: null,
        }
    }

    inputHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    LoginFunction = (e) => {
        e.preventDefault();
        axios.get(constants.static_IP + ":8080/SpeedMe_Backend/api/account/getAllAccounts")
            .then((response) => {
                let accounts = response.data;
                for (let account = 0; account < accounts.length; account++) {
                    if ((this.state.userName === accounts[account].userName) &&
                        (this.state.pwd === accounts[account].pwd)) {
                        this.setState({
                            logged_user: accounts[account]
                        });
                        sessionStorage.setItem("Account", JSON.stringify(accounts[account]));
                        this.props.history.push("/Tool");
                    }
                    else {
                        this.setState({
                            message: "You have inserted wrong credentials"
                        });
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    registerFuncion = () => {
        // var hash = bcrypt.hashSync(this.state.pwd, 10);
        axios.post(constants.static_IP + ':8080/SpeedMe_Backend/api/account/createAccount', {
            userName: this.state.userName,
            pwd: this.state.pwd
        })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    message: response.data.message
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    resetSeesion = () => {
        sessionStorage.clear();
        this.props.history.push("/");
    }

    render() {
        if (JSON.parse(sessionStorage.getItem("Account")) === null) {
            return (
                <div className="container form_size">
                    <br></br>
                    <br></br>
                    <p className="post card"> {this.state.message}</p>
                    <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="Username" id="userName" required />
                    <input className="resizedTextbox" onChange={this.inputHandle} type="password" placeholder="Password" id="pwd" minlength="4" required />
                    <button onClick={this.LoginFunction} className="btn blue lighten-1" >Login</button>
                    <button onClick={this.registerFuncion} className="btn blue lighten-1" >Register</button>
                </div>
            )
        }
        return (
            <div className="center-align">
                <br></br>
                <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                <br></br>
                <button onClick={this.resetSeesion} className="btn blue lighten-1" type="submit">Logout</button>
                <div className="container">
                    <div>
                        <br></br>
                        <Delete resetSeesion={this.resetSeesion} />
                        <Update />
                    </div>
                </div>

            </div>
        );
    }
}
export default withRouter(Form);
