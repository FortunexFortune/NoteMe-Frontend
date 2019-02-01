import React, { Component } from 'react';
import { Button, Icon, Modal } from 'react-materialize'
import axios from 'axios';


class DeleteNote extends Component {
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



    
    deleteFunction = (e) => {
        e.preventDefault();
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


    updateNote =()=>{
        axios.get("http://localhost:8080/SpeedMe_Backend/api/account/getAllAccounts")
        .then((response) => {
            let accounts = response.data;
            for (let account = 0; account < accounts.length; account++) {
                if ((JSON.parse(sessionStorage.getItem("Account")).userName === accounts[account].userName)){
                    sessionStorage.removeItem("Account");
                    sessionStorage.setItem("Account", JSON.stringify(accounts[account]));
                    console.log("update took place")
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }



    render() {
        console.log(this.state.id);
        return (
            <div>
                <Modal
                    header='Delete'
                    bottomSheet
                    trigger={<Button className="orange accent-4">Delete Note</Button>}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            <form onSubmit={this.deleteFunction}>
                        <input className="resizedTextbox" onChange={this.inputHandle} type="number" placeholder="Insert note id" id="id" required />
                        <button className="btn green lighten-1" type="submit">Delete</button>
                    </form>
                </Modal>
            </div >

        );
    }
}

export default DeleteNote;
