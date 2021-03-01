import React, { Component } from 'react';

import './Content.css';

export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Privacy Dashboard</h1>
                    <p>Welcome to Privacy Dashboard! A place where you can find all the resources managed by the FOSS Community of NSBM.  A community of tech enthusiasts who love Open - Source.</p>
                </div>
            </React.Fragment>
        )
    }
}
