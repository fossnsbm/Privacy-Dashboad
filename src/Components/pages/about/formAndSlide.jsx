import React from "react";

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

          <div className="col-md-6 mb-2">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                />
              </ol>
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/ESrS0FwUwAQ8V59.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://www.nsbm.ac.lk/wp-content/uploads/2019/09/01-7.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://media-exp1.licdn.com/dms/image/C561BAQGjtb1ISMx83w/company-background_10000/0/1601264433225?e=2159024400&v=beta&t=R7fpNuvqTezg7y8momjKVp6JayY7C6r4DONl-txmDf4"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAndSlide;
