import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact'
import React, { Component } from 'react'
import {MDBCol, MDBCardHeader} from 'mdbreact';
import { Link } from 'react-router-dom';

export default class CardItem extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBCol sm="12" md="6" lg="4">
                    
                        <MDBCard className="mcard">
                            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                                <i className="far fa-newspaper fa-3x ico"></i>
                            </MDBCardHeader>
                            <Link to="/blog">
                            <MDBCardBody cascade className="text-right">
                                <MDBCardTitle className="mcardtitle">FOSS Blog</MDBCardTitle>
                                <MDBCardText className="mcardtext"><h5 id="lblBlog"><span class='badge rounded-pill bg-danger'>Status: Inactive</span></h5></MDBCardText>
                                <MDBCardText className="mcardtext">1 Day ago</MDBCardText>
                                <hr/>
                                <div className="text-left text-muted">2021/02/01</div>
                            </MDBCardBody>
                            </Link>
                        </MDBCard>

                        <MDBCard className="mcard">
                            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                                <i className="far fa-newspaper fa-3x ico"></i>
                            </MDBCardHeader>
                            <Link to="/blog">
                            <MDBCardBody cascade className="text-right">
                                <MDBCardTitle className="mcardtitle">KetchUp AddOn</MDBCardTitle>
                                <MDBCardText className="mcardtext"><h5 id="lblBlog"><span class='badge rounded-pill bg-danger'>Status: Inactive</span></h5></MDBCardText>
                                <MDBCardText className="mcardtext">1 Day ago</MDBCardText>
                                <hr/>
                                <div className="text-left text-muted">2021/02/01</div>
                            </MDBCardBody>
                            </Link>
                        </MDBCard>
                    
                </MDBCol>
                <MDBCol sm="12" md="6" lg="4">
                    
                        <MDBCard className="mcard">
                            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                                <i className="far fa-newspaper fa-3x ico"></i>
                            </MDBCardHeader>
                            <Link to="/blog">
                            <MDBCardBody cascade className="text-right">
                                <MDBCardTitle className="mcardtitle">FOSS Forum</MDBCardTitle>
                                <MDBCardText className="mcardtext"><h5 id="lblForum"><span class='badge rounded-pill bg-danger'>Status: Inactive</span></h5></MDBCardText>
                                <MDBCardText className="mcardtext">1 Day ago</MDBCardText>
                                <hr/>
                                <div className="text-left text-muted">2021/02/01</div>
                            </MDBCardBody>
                            </Link>
                        </MDBCard>

                        <MDBCard className="mcard">
                            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                                <i className="far fa-newspaper fa-3x ico"></i>
                            </MDBCardHeader>
                            <Link to="/blog">
                            <MDBCardBody cascade className="text-right">
                                <MDBCardTitle className="mcardtitle">Event 404</MDBCardTitle>
                                <MDBCardText className="mcardtext"><h5 id="lblBlog"><span class='badge rounded-pill bg-danger'>Status: Inactive</span></h5></MDBCardText>
                                <MDBCardText className="mcardtext">1 Day ago</MDBCardText>
                                <hr/>
                                <div className="text-left text-muted">2021/02/01</div>
                            </MDBCardBody>
                            </Link>
                        </MDBCard>
                    
                </MDBCol>

                <MDBCol sm="12" md="6" lg="4">
                    
                    <MDBCard className="mcard">
                        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                            <i className="far fa-newspaper fa-3x ico"></i>
                        </MDBCardHeader>
                        <Link to="/blog">
                        <MDBCardBody cascade className="text-right">
                            <MDBCardTitle className="mcardtitle">Mail Server</MDBCardTitle>
                            <MDBCardText className="mcardtext"><h5 id="lblBlog"><span class='badge rounded-pill bg-danger'>Status: Inactive</span></h5></MDBCardText>
                            <MDBCardText className="mcardtext">1 Day ago</MDBCardText>
                            <hr/>
                            <div className="text-left text-muted">2021/02/01</div>
                        </MDBCardBody>
                        </Link>
                    </MDBCard>

                    <MDBCard className="mcard">
                        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient-rgba py-2 mx-4 mb-3 mcardheader">
                            <i className="far fa-newspaper fa-3x ico"></i>
                        </MDBCardHeader>
                        <Link to="/blog">
                        <MDBCardBody cascade className="text-right">
                            <MDBCardTitle className="mcardtitle">RSVP App</MDBCardTitle>
                            <MDBCardText className="mcardtext"><h5 id="lblBlog"><span class='badge rounded-pill bg-danger'>Status: Inactive</span></h5></MDBCardText>
                            <MDBCardText className="mcardtext">1 Day ago</MDBCardText>
                            <hr/>
                            <div className="text-left text-muted">2021/02/01</div>
                        </MDBCardBody>
                        </Link>
                    </MDBCard>
                
            </MDBCol>
            </React.Fragment>
        )
    }
}
