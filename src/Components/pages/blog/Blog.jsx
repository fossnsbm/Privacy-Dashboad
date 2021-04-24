import React from "react"
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol  } from 'mdbreact';
import './Blog.css';
import Chart from './Chart';

const Blog = (props) => {
  const data_panel = {
    columns: [
     
      {
        'label': 'Status',
        'field': 'status',
        'sort': 'asc'
      },
      {
        'label': 'Duration',
        'field': 'duration',
        'sort': 'asc'
      },
      {
        'label': 'Time',
        'field': 'time',
        'sort': 'asc'
      },
     
    ],
    rows: [
      {
        
        'status': 'Active',
        'duration': '1 hour',
        'time': '19:52',
      },
      {
        
        'status': 'Inactive',
        'duration': '2 hours',
        'time': '19:52',
      },

      {
        
        'status': 'Active',
        'duration': '1 hour',
        'time': '19:52',
      },
      {
        
        'status': 'Inactive',
        'duration': '2 hours',
        'time': '19:52',
      },

      {
        
        'status': 'Active',
        'duration': '1 hour',
        'time': '19:52',
      },
      {
        
        'status': 'Inactive',
        'duration': '2 hours',
        'time': '19:52',
      },

      {
        
        'status': 'Active',
        'duration': '1 hour',
        'time': '19:52',
      }  
    ]
  };

  return(
    <MDBContainer className="Contain">
       <MDBRow>

              <MDBCol className="lg-6">
                <h2>FOSS Blog</h2>
                <p className="blogpara">This provides people with open mind to write and publish out there informal style.Blogging creates the team skills,writing and creative skills of the users.The biggest question who can contribute to the foss Blog? The main contributers should be NSBM FOSS volunteers.</p>
                
                <Chart/>
              </MDBCol>

           <MDBCol className="lg-6">
           <MDBCard narrow>

           <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 CardHeader">           
                <a href="#" className="white-text mx-3">Foss Blog</a>
            </MDBCardHeader>
            
            <MDBCardBody cascade>
                <MDBTable btn fixed>
                <MDBTableHead columns={data_panel.columns}/>
                <MDBTableBody rows={data_panel.rows} />
                </MDBTable>
            </MDBCardBody>
        </MDBCard>
           </MDBCol>
       </MDBRow>
    </MDBContainer>
  );
};

export default Blog;