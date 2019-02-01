import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, withRouter } from 'react-router-dom'
import { Button, Icon, Modal } from 'react-materialize'



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

    axios.post('http://localhost:8080/SpeedMe_Backend/api/account/updateAccount/' + JSON.parse(sessionStorage.getItem("Account")).userName
      , {
        userName: this.state.userName,
        pwd: this.state.pwd
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
          trigger={<a href="#" onClick={this.displayForm} className="col s6"> Update Password</a>}>
          <form onSubmit={this.updatedFunction} className="form_size ">
            <p>Insert Your UserName and new password below</p>
            <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="Username" id="userName" required />
            <input className="resizedTextbox" onChange={this.inputHandle} type="password" placeholder="Password" id="pwd" minlength="4" required />
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
