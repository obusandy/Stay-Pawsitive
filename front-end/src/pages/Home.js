import React from "react";
import "../pages/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <body className="parallax">
        <div className="text-container fw-bold">
          <h1>STAY-PAWSITIVE</h1>

          {/* Bootstrap Carousel */}
          <Carousel indicators={true} interval={5000} className="Carousel">
            {/* First Slide */}
            <Carousel.Item>
              <div className="description-part">
                Welcome to our animal welfare initiative! Here at stay-pawsitive
                we believe in creating a better world for our very cutesy furry
                friends, offering a range of services from adoptions to
                fostering.
              </div>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <div className="description-part">
                Explore our offerings, and let’s work together to care for those
                who need it the most. Whether you’re looking to adopt, donate,
                or get involved, we’ve got everything you need to make a
                difference.
              </div>
            </Carousel.Item>
          </Carousel>

          <br />
          <p>WE CARE</p>
        </div>
      </body>
    </>
  );
}
