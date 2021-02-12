import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
import './aboutStyle.css';


import { MDBInput } from "mdbreact";
import { useFormik } from 'formik';
 main

function FormAndSlide() {

  const validate = values => {
    const errors = {};

    if(!values.userName) {
      errors.userName = 'Required';
    } else if(values.userName.length > 20) {
      errors.userName = 'Must be 20 characters or less';
    }

    if(!values.email) {
      errors.email = 'Required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.message) {
      errors.message = 'Required';
    } else if(values.message.length > 100) {
      errors.message = 'Must be 100 characters or less';
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      console.log(formik.values.userName);
      console.log(formik.values.email);
      console.log(formik.values.message);
    }

  })

  return (
   
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <h3>Contact</h3>

                <form>
                  <div id="form_action">
                          <div className="mt-2">

                  <form>
                  
                                <div class="form-outline mb-4">
                                <i class="fas fa-user-alt fa-sm"></i>
                                  <input type="text" id="form1Example1" class="form-control" placeholder="Username" />
                                </div>

                                
                                <div class="form-outline mb-4">
                                  <i class="fas fa-paper-plane fa-sm"></i>
                                  <input type="email" id="form1Example2" class="form-control" placeholder="example@outlook.com"/>
                                </div>

                                <div class="md-form">
                                  <i class="fas fa-envelope-open fa-sm"></i>
                                  <textarea id="form10" class="md-textarea form-control mt-1" rows="3" placeholder="Message ..."></textarea>
                                </div>
                              

                            
 
  
                  </form>
                    {/*<label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                    </label>*/}

                    {/*<MDBInput label="Username" icon="user" />
                    <MDBInput label="Email" icon="fas fa-at" />
                    <MDBInput  label="Message" icon="envelope"  type="textarea"  rows="3" cols="10"   className="area"/>
                  <i class=""></i>*/}
                  
                    
                  
                    
                  </div>
                </div>
                </form>
                    <div id="button_sub">
                        <button type="submit" class="btn  btn-block">Sign in</button>
                    </div>
              </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4">
              {/*<label htmlFor="exampleInputEmail1" className="form-label">
              Email address
              </label>*/}

              <MDBInput label="Username" icon="user" name='userName' id='userName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              {formik.errors.userName && formik.touched.userName ? <div className='error_msg'>{formik.errors.userName}</div> : null}
              <MDBInput label="Email" icon="fas fa-at" name='email' id='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? <div className='error_msg'>{formik.errors.email}</div> : null}
              <MDBInput  label="Message" icon="envelope"  type="textarea"  rows="3" cols="10" name='message' id='message' className="area"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.errors.message && formik.touched.message ? <div className='error_msg'>{formik.errors.message}</div> : null}
            </div>
           
            <button
              type="submit"
              className="btn btn-primary  "
              style={{borderRadius:'8px'}}
            >
              Submit
            </button>
          </form>
        </div>
main

        <div className="col-md-1"></div>

        <div className="col-md-6 mb-2" >
         
         <div className="slider mt-5" >
        <MDBCarousel
    activeItem={1}
    length={3}
    showControls={true}
    showIndicators={true}
    className="z-depth-1"
    style={{borderRadius:'10px'}}
  >
    <MDBCarouselInner style={{borderRadius:'10px'}}>
      <MDBCarouselItem itemId="1">
        <MDBView >
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C561BAQGjtb1ISMx83w/company-background_10000/0/1601264433225?e=1612623600&v=beta&t=UMnb4x3o8fXiBIaGdEpMyu_XzHMGiVDCxIVtLYxrt4Q"
            alt="First Image"
          />
        <MDBMask className="masks" />
        </MDBView>
        <MDBCarouselCaption>
          
          <p>Lorem ipsum dolor sit amet, consequuntur est magni iusto dolores nesciunt aliquid. </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="2">
        <MDBView>
          <img
            className="d-block w-100"
            src="https://www.nsbm.ac.lk/wp-content/uploads/2019/09/01-7.jpg"
            alt="Second Image"
          />
        <MDBMask className="masks" />
        </MDBView>
        <MDBCarouselCaption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laboriosam illo </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="3">
        <MDBView>
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C5622AQFIN-s-SN6U5g/feedshare-shrink_2048_1536/0/1590757360946?e=1615420800&v=beta&t=BwP5zJVRaYQEVL0eWYdXqmFLVoGdR5P-Tv-sYo0So2M"
            alt="Third Image"
          />
        <MDBMask className="masks" />
        </MDBView>
        <MDBCarouselCaption >
         
          <p> Ratione laboriosam illo consequuntur est magni iusto dolores nesciunt aliquid.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>
  </div>



        </div>
      </div>
    </div>
  </>
      
  );
}

export default FormAndSlide;