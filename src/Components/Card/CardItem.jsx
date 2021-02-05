import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact'
import React, { Component } from 'react'
import {MDBCol, MDBCardHeader} from 'mdbreact';

export default class CardItem extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBCol sm="12" md="6" lg="4">
                    <MDBCard className="mcard">
                        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 mcardheader">
                            <p>FOSS Blog</p>
                        </MDBCardHeader>
                        <MDBCardBody cascade className="text-right">
                            <MDBCardTitle className="mcardtitle">{this.props.title}</MDBCardTitle>
                            <MDBCardText className="mcardtext">{this.props.cardText}</MDBCardText>
                            <hr/>
                            <div className="text-left text-muted">
                                Last Update 2020/01/25 12:20:59
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </React.Fragment>
        )
    }
}
