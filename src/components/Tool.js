import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CreateNote from "./CreateNote"
import UpdateNote from "./UpdateNote"
import DeleteNote from "./DeleteNote"
import axios from 'axios';
import * as constants from "./constants.js";



class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_user: (JSON.parse(sessionStorage.getItem("Account"))),

        }
    }

    componentDidMount(){
        if(sessionStorage.getItem("Account") !== null){
            axios.get(constants.static_IP+":8080/SpeedMe_Backend/api/account/getAllAccounts")
            .then((response) => {
                let accounts = response.data;
                for (let account = 0; account < accounts.length; account++) {
                    if ((JSON.parse(sessionStorage.getItem("Account")).userName === accounts[account].userName)){
                        sessionStorage.removeItem("Account");
                        sessionStorage.setItem("Account", JSON.stringify(accounts[account]));
                        this.setState({
                            logged_user: JSON.parse(sessionStorage.getItem("Account"))
                        });
                        console.log("(componetDIMount) took place : ", this.state.logged_user)
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        if (JSON.parse(sessionStorage.getItem("Account")) === null) {
            return (<h3 className="container center-align" > This is a Restricted Page, you must log in to access this page content</h3>)
        }
        return (

            <div className="container">
                <h4 className="center-align" >Logged User : {this.state.logged_user.userName.toUpperCase()}</h4>

                <div className="row">
                    <div className="col s1">
                        <CreateNote updateAccountInfo={this.updateAccountInfo}/>
                    </div>
                    <div className="col s1">
                        <UpdateNote updateAccountInfo={this.updateAccountInfo}/>
                    </div>
                    <div className="col s1">
                        <DeleteNote updateAccountInfo={this.updateAccountInfo}/>
                    </div>
                </div>

                {(this.state.logged_user.notes.reverse().map((note) =>
                    <div className="post card" key={note.noteID}>
                        <div className="card-content" >
                            <span className="card-title">  <b> Title : {note.title} </b></span>
                            <span className="card-title"> <em>ID</em> : {note.noteID} <b /> </span>
                            <br /> date :  {note.date}
                            <br /> content :{note.content}
                        </div>
                    </div>)
                )}
            </div>
        )
    }
}
export default withRouter(Tool);


