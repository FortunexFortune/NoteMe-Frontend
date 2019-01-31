import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'

import axios from 'axios';


class Delete extends Component {
    

    deleteFuntion = () => {
        axios.delete('http://localhost:8080/SpeedMe_Backend/api/account/deleteAccount/' + JSON.parse(sessionStorage.getItem("Account")).userName)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
            this.props.resetSeesion();
    }

    render() {
        return (
            <div>
                <a href="" onClick={this.deleteFuntion} className="col s6">Delete Account</a>
            </div>
        );
    }
}

export default withRouter(Delete);
