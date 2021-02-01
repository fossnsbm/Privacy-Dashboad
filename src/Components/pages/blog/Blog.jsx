import React from "react"
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol  } from 'mdbreact';
import './Blog.css';

const Blog = (props) => {
  const data_panel = {
    columns: [
     
      {
        'label': 'Status',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Duration',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Time',
        'field': 'username',
        'sort': 'asc'
      },
     
    ],
    rows: [
      {
        
        'first': 'On',
        'last': 'Otto',
        'username': '@mdo',
      },
      {
        
        'first': 'Off',
        'last': 'Thornton',
        'username': '@fat',
      },

      {
        
        'first': 'On',
        'last': 'Otto',
        'username': '@mdo',
      },
      {
        
        'first': 'Off',
        'last': 'Thornton',
        'username': '@fat',
      },

      {
        
        'first': 'On',
        'last': 'Otto',
        'username': '@mdo',
      },
      {
        
        'first': 'Off',
        'last': 'Thornton',
        'username': '@fat',
      },

      {
        
        'first': 'On',
        'last': 'Otto',
        'username': '@mdo',
      },
      {
        
        'first': 'Off',
        'last': 'Thornton',
        'username': '@fat',
      },

      {
        
        'first': 'On',
        'last': 'Otto',
        'username': '@mdo',
      },
      
      
    ]
  };

  return(
    <MDBContainer className="Contain">
       <MDBRow>

              <MDBCol className="lg-6">

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