import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_user: (JSON.parse(sessionStorage.getItem("Account")))
        }
    }

    render() {
        if(JSON.parse(sessionStorage.getItem("Account")) === null){
            return(<h3 className="container center-align" > This is a Restricted Page, you must log in to access this page content</h3>)
         }
        // console.log(this.state.logged_user);
        // console.log(JSON.stringify(this.state.logged_user));
        return (
                <div className="col s7" className="container">
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


