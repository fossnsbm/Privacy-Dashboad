import React from "react"
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol  } from 'mdbreact';
import './Blog.css';

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
        
        'status': 'Active',
        'last': 'Otto',
        'username': '@mdo',
      },
      {
        
        'status': 'Inactive',
        'last': 'Thornton',
        'username': '@fat',
      },

      {
        
        'status': 'Active',
        'last': 'Otto',
        'username': '@mdo',
      },
      {
        
        'status': 'Inactive',
        'last': 'Thornton',
        'username': '@fat',
      },

      {
        
        'status': 'Active',
        'last': 'Otto',
        'username': '@mdo',
      },
      {
        
        'status': 'Inactive',
        'last': 'Thornton',
        'username': '@fat',
      },

      {
        
        'status': 'Active',
        'last': 'Otto',
        'username': '@mdo',
      }  
    ]
  };

  return(
    <MDBContainer className="Contain">
       <MDBRow>

              <MDBCol className="lg-6">
                <h2>FOSS Blog</h2>
                <p className="blogpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi architecto quasi. Nobis non labore cumque eius necessitatibus eaque expedita amet, dolore tempora blanditiis vel debitis delectus aut, ratione quisquam</p>
                <p className="blogpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sapiente aperiam labore ipsum natus enim culpa, laborum repellendus quo? Quaerat, alias? Suscipit assumenda, illum id soluta quidem animi culpa distinctio!</p>
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