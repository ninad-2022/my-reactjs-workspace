import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
const CarouselDemo = () => {
  return (
    <>
      <Container>
        <Carousel variant="">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.narendramodi.in/cmsuploads/0.71081000_1645943969_1155x548-mann-ki-baat.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p className="text-primary">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.narendramodi.in/cmsuploads/0.36213700_1646651913_11565x548prime-minister-narendra-modi-s-remarks-on-jan-aushadhi-diwas.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.narendramodi.in/cmsuploads/0.06292500_1646750363_pm-addresses-seminar-on-international-womens-day-in-kutchbanner.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.narendramodi.in/cmsuploads/0.56483900_1622912686_merchandise.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Fourth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default CarouselDemo;
