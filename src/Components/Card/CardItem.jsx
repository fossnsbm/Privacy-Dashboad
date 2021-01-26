import React, { Component } from 'react'

export default class CardItem extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-sm-4">
                    <div className="card w-100 mcard">
                        <div className="card-body">
                            <h5 className="card-title text-right">{this.props.title}</h5>
                            <p className="card-text">{this.props.cardText}</p>
                        </div>
                        <img src="https://picsum.photos/201" alt="Avatar" className="avatar" />
                        <div className="card-footer text-muted">
                            Last Update 2020/01/25 12:20:59
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
