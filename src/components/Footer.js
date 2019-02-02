import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Footer extends Component {

    render() {
        return (
            <div >
                    <footer className="page-footer indigo ">
                        <div className="footer-copyright">
                            <div className="container">
                                © 2019 Copyright RemebmerME
                                <a className="grey-text text-lighten-4 right" href="#!">' He listens well who takes notes.'  - Dante Alighieri</a>
                            </div>
                        </div>
                    </footer>

            </div>
        )
    }
}
export default withRouter(Footer);


