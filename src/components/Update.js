import React, { Component } from 'react';
import axios from 'axios';
import {  withRouter } from 'react-router-dom'
import {  Modal } from 'react-materialize'
import * as constants from "./constants.js";
import bcrypt from 'bcryptjs';


class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  updatedFunction = (e) => {
    e.preventDefault();
    let userName = JSON.parse(sessionStorage.getItem("Account")).userName;
    let pwd = bcrypt.hashSync(this.state.pwd, 10);

    axios.post(constants.static_IP + ':8080/SpeedMe_Backend/api/account/updateAccount/' + userName
      , {
        userName: this.state.userName,
        pwd: pwd
      })
      .then((response) => {
        console.log(response.data.message);

        this.setState({
          message: response.data.message
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div >
        <Modal
          header='Update Password'
          trigger={<a href="/" onClick={this.displayForm} className="col s6"> Update Password</a>}>
          <form onSubmit={this.updatedFunction} className="form_size ">
            <p>Insert Your UserName and new password below</p>
            <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="Username" id="userName" required />
            <input className="resizedTextbox" onChange={this.inputHandle} type="password" placeholder="Password" id="pwd" minLength="3" required />
            <button className="btn green lighten-1" type="submit">Update</button>
            <br></br>
            <p> {this.state.message}</p>
            <br></br>
          </form>
        </Modal>
      </div>

    );
  }
}
export default withRouter(Update);
