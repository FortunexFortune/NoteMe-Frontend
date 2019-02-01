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
        }
    }

    inputHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    updateNoteFunction = (e) => {
        e.preventDefault();
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


    render() {
        console.log(this.state)
        return (
            <div>
                <Modal
                    header='Update'
                    bottomSheet
                    trigger={<Button className="red accent-4">Update Note</Button>}>
                    <form onSubmit={this.updateNoteFunction} className="form_size ">
                        <p>Insert Your new Info Below </p>
                        <input className="resizedTextbox" onChange={this.inputHandle} type="number" placeholder="Note id" id="id" required />
                        <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="title" id="title" required />
                        <input className="resizedTextbox" onChange={this.inputHandle} type="text" placeholder="content" id="content" required />
                        <button className="btn green lighten-1" type="submit">Update</button>
                        <br></br>
                        {/* <p> {this.state.message}</p> */}
                        <br></br>
                    </form>
                </Modal>
            </div >

        );
    }
}

export default UpdateNote;
