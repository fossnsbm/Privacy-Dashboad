import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
import './aboutStyle.css';


function FormAndSlide() {
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
        <MDBView>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/ESrS0FwUwAQ8V59.jpg"
            alt="First slide"
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
            alt="Second slide"
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
            src="https://pbs.twimg.com/media/ESrS0FwUwAQ8V59.jpg"
            alt="Third slide"
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