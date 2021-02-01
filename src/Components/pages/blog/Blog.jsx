import React from "react"
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol  } from 'mdbreact';
//import './Table.css';

const Blog = (props) => {
  const data_panel = {
    columns: [
     
      {
        'label': 'Field1',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Field1',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Field1',
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
      
      
    ]
  };

  return(
    <MDBContainer>
       <MDBRow>

                <MDBCol className="lg-6">

               </MDBCol>

           <MDBCol className="lg-6">
           <MDBCard narrow>
            
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

