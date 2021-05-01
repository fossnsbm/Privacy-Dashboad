import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact'
import React, { Component } from 'react'
import {MDBCol, MDBCardHeader} from 'mdbreact';
import { Link } from 'react-router-dom';

export default class CardItem extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBCol sm="12" md="6" lg="4">
                    
<<<<<<< HEAD
                        <MDBCard className="mcard">
                            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                                <i className={`${this.props.icon} fa-3x ico`}></i>
                            </MDBCardHeader>
                            <Link to={`${this.props.path}`}>
                            <MDBCardBody cascade className="text-right">
                                <MDBCardTitle className="mcardtitle">{this.props.title}</MDBCardTitle>
                                <MDBCardText className="mcardtext"><h5><span class={`badge rounded-pill ${this.props.status == "Active" ? "bg-success" : "bg-danger"}`}>{`Status: ${this.props.status}`}</span></h5></MDBCardText>
                                <MDBCardText className="mcardtext">{`Down Time: ${this.props.downTime}`}</MDBCardText>
                                <hr/>
                                <div className="text-left text-muted">
                                    {`Last Update: ${this.props.lastUpdate}`}
                                </div>
                            </MDBCardBody>
                            </Link>
                        </MDBCard>
                </MDBCol>
=======
                    <MDBCard className="mcard">
                        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                            <i className={`${this.props.icon} fa-3x ico`}></i>
                        </MDBCardHeader>
                        <Link to={`${this.props.path}`}>
                        <MDBCardBody cascade className="text-right">
                            <MDBCardTitle className="mcardtitle">{this.props.title}</MDBCardTitle>
                            <MDBCardText className="mcardtext"><h5><span class={`badge rounded-pill ${this.props.status == "Active" ? "bg-success" : "bg-danger"}`}>{`Status: ${this.props.status}`}</span></h5></MDBCardText>
                            <MDBCardText className="mcardtext">{`Down Time: ${this.props.downTime}`}</MDBCardText>
                            <hr/>
                            <div className="text-left text-muted">
                                {`Last Update: ${this.props.lastUpdate}`}
                            </div>
                        </MDBCardBody>
                        </Link>
                    </MDBCard>                
            </MDBCol>
>>>>>>> main
            </React.Fragment>
        )
    }
}
