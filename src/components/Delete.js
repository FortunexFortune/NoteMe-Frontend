import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { Modal } from 'react-materialize'
import * as constants from "./constants.js";


class Delete extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
        }
    }

    inputHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    deleteFuntion = () => {
        axios.delete(constants.static_IP + ':8080/SpeedMe_Backend/api/account/deleteAccount/' + JSON.parse(sessionStorage.getItem("Account")).userName)
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
            <div >
                <Modal
                    header='Delete Account'
                    trigger={<a className="waves-effect waves-light  modal-trigger center-align" href="#modal1">Delete Account</a>}>
                    <p>Once you delete a Account, there is no going back. Please be certain.</p>
                        <p>All your Account infomration and notes will be completly erased from out database.</p>
                        <button data-target="modal1" onClick={this.deleteFuntion} className="btn red darken-1">  Yes Delete!! </button>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Delete);
