import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import './aboutStyle.css'

function FormAndSlide() {
  return (
   
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <h3 className="container">Contact</h3>
          <form>
            <div className="mt-4">
              {/*<label htmlFor="exampleInputEmail1" className="form-label">
              Email address
              </label>*/}
              <input
                type="email"
                className="form-control mt-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
              <div id="emailHelp" className="form-text">
                <small>We'll never share your email with anyone else.</small>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Subject"
              />
            </div>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              placeholder="Massage"
            />
            <button
              type="submit"
              className="btn btn-primary rounded-pill mt-4 mb-4"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-6 mb-2" >
         
         <div className="slider" >
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