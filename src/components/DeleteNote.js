import React, { Component } from 'react';
import { Button, Icon, Modal } from 'react-materialize'
import axios from 'axios';


class DeleteNote extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            message:null
        }
    }

    inputHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    deleteFunction = (e) => {
        e.preventDefault();
        let notes = JSON.parse(sessionStorage.getItem("Account")).notes;
        for (let note = 0; note < notes.length; note++) {
            console.log(notes[note].noteID);
            if (parseInt(this.state.id) === parseInt(notes[note].noteID)) {
                axios.delete("http://localhost:8080/SpeedMe_Backend/api/note/deleteNote/" + this.state.id)
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
            else { 
                this.setState({
                    message: "!!!Selected Note ID  Does not belong to your account!!!",
                })
            }
        }
    }

    render() {
        return (
            <div>
                <Modal
                    header='Delete'
                    bottomSheet
                    trigger={<Button className="red accent-4">Delete Note</Button>}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            <form onSubmit={this.deleteFunction}>
                        <input className="resizedTextbox" onChange={this.inputHandle} type="number" placeholder="Insert note id" id="id" required />
                        <button className="btn red lighten-1" type="submit">Delete</button>
                    </form>
                    <p>{this.state.message}</p>
                </Modal>
            </div >

        );
    }
}
export default DeleteNote;
