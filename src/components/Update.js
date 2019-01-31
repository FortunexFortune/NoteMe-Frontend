import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, withRouter } from 'react-router-dom'



class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formIsHiden: true,
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

  updatedFunction = () => {
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


  displayForm = () => {
    this.setState({
      formIsHiden: !this.state.formIsHiden
    });

  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.displayForm} className="col s6"> Update Password</a>
        <br></br>
        <br></br>
        <br></br>
        {this.state.formIsHiden ? null :
          <form onSubmit={this.updatedFunction} className="form_size ">
            <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="Username" id="userName" required />
            <input className="resizedTextbox" onChange={this.inputHandle} type="password" placeholder="Password" id="pwd" minlength="4" required />
            <button className="btn blue lighten-1" type="submit">Update</button>
            <div className="post card">
              <br></br>
              <p> {this.state.message}</p>
              <br></br>
            </div>
          </form>}



      </div>

    );
  }
}

export default withRouter(Update);
