import React, { Component } from 'react';
import { Button, Icon, Modal } from 'react-materialize'
import axios from 'axios';


class UpdateNote extends Component {

    constructor() {
        super();
        this.state = {
            title: null,
            content: null,
            id: null,
            message:null
        }
    }

    inputHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    updateNoteFunction = (e) => {
        e.preventDefault();
        let notes = JSON.parse(sessionStorage.getItem("Account")).notes;
        for (let note = 0; note < notes.length; note++) {
            console.log(notes[note].noteID);
            if (parseInt(this.state.id) === parseInt(notes[note].noteID)) {

                let d = Date(Date.now());
                let currentDate = d.toString()
                axios.post("http://localhost:8080/SpeedMe_Backend/api/note/updateNote/" + this.state.id, {
                    title: this.state.title,
                    content: this.state.content,
                    date: currentDate,
                    userName: JSON.parse(sessionStorage.getItem("Account")).userName
                })
                    .then((response) => {
                        console.log(response.data);

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
                    header='Update'
                    bottomSheet
                    trigger={<Button className="orange accent-4">Update Note</Button>}>
                    <form onSubmit={this.updateNoteFunction} className="form_size ">
                        <p>Insert Your new Info Below </p>
                        <input className="resizedTextbox" onChange={this.inputHandle} type="number" placeholder="Note id" id="id" required />
                        <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="title" id="title" required />
                        <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="content" id="content" required />
                        <button className="btn orange lighten-1" type="submit">Update</button>
                        <br></br>
                        <p> {this.state.message}</p>
                        <br></br>
                    </form>
                </Modal>
            </div >
        );
    }
}

export default UpdateNote;
