import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './simple.css';
import Delete from "./Delete"
import Update from "./Update"
import * as constants from "./constants.js";
import bcrypt from 'bcryptjs';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            pwd: "",
            message: null,
        }
    }

    inputHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    LoginFunction = () => {
        axios.get(constants.static_IP + ":8080/SpeedMe_Backend/api/account/getAccount/" + this.state.userName)
            .then((response) => {
                let account = response.data;
                if ((this.state.userName === account.userName) &&
                    (bcrypt.compareSync(this.state.pwd, account.pwd))) {
                    sessionStorage.setItem("Account", JSON.stringify(account));
                    this.props.history.push("/Tool");
                }
                else {
                    this.setState({
                        message: "You have inserted wrong credentials"
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    registerFuncion = () => {
        //prevents any white space in the password before hashing
        for (var i = 0; i < this.state.pwd.length; i++) {
            if (this.state.pwd[i] === " ") {
                return this.setState({
                    message: "account can not be added"
                });
            }
        }

        //prevents empty sting password 
        if (this.state.pwd === "") {
            return this.setState({
                message: "password field is empty"
            });
        }

        let pwd = bcrypt.hashSync(this.state.pwd, 10);
        axios.post(constants.static_IP + ':8080/SpeedMe_Backend/api/account/createAccount', {
            userName: this.state.userName,
            pwd: pwd
        })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    message: response.data.message
                });
                if (response.data.message === "account has been sucessfully added") {
                    this.LoginFunction();
                }
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
                    <input className="resizedTextbox" onChange={this.inputHandle} type="password" placeholder="Password" id="pwd" required />
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
