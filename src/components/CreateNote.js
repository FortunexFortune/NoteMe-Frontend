import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize'
import axios from 'axios';
import * as constants from "./constants.js";


class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            content: null,
            logged_user: JSON.parse(sessionStorage.getItem("Account")).userName
        }
    }
    

    inputHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    createNoteFunction = (e) => {
        e.preventDefault(); 
        let d = Date(Date.now()); 
        let currentDate = d.toString() 
        axios.post( constants.static_IP + ":8080/SpeedMe_Backend/api/note/createNote", {
            title: this.state.title,
            content: this.state.content,
            date: currentDate,
            userName : JSON.parse(sessionStorage.getItem("Account")).userName
        })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    message: response.data.message
                });
                this.props.updateAccountInfo();
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Modal
                    header='Create Note'
                    bottomSheet
                    trigger={<Button className="light-green darken-4">Create Note</Button>}>
                    <form onSubmit={this.createNoteFunction} className="form_size ">
                        <p>Create a new note</p>
                        <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="title" id="title" required />
                        <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="content" id="content" required />
                        <button className="btn green lighten-1" type="submit">Create</button>
                        <br></br>
                        <br></br>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default CreateNote;
