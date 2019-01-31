import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Footer extends Component {

    render() {
        // if (JSON.parse(sessionStorage.getItem("Account")) === null) {
        //     return (<h3 className="container center-align" > This is a Restricted Page, you must log in to access this page content</h3>)
        // }
        // console.log(this.state.logged_user);
        // console.log(JSON.stringify(this.state.logged_user));
        return (
            <div >
                <footer class="page-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="white-text">Footer Content</h5>
                                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="white-text">Links</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>


            </div>
        )
    }
}
export default withRouter(Footer);


