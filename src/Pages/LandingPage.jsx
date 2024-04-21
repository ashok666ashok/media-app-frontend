import React from "react";
import { Row, Col } from "react-bootstrap";
import Lgif from "./Lgif.gif";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <>
      <Row className="mt-5">
        <Col></Col>
        <Col lg={6} md={6} sm={6}>
          <div className="heading align-items-center justify-content-between">
            <h1 className="text-primary" style={{ textAlign: "justify" }}>
              Welcome To <span className="text-light">Media-Player</span>
            </h1>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              non reiciendis iusto soluta! Laudantium beatae iure adipisci illum
              sequi. Quas assumenda sequi reiciendis accusamus veniam dolorum
              consectetur corrupti aliquid saepe.
            </p>
            <div className="button-wrapper">
              <Link to={'/home'}>
              <button className="btn btn-primary rounded-pill">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </Col>
      <Col lg={5} md={5} sm={5}>
          <div className="img-wrapper " style={{display:'grid',placeItems:'center',padding:'-20px',marginTop:'-80px'}}>
            <img src={Lgif} alt="" width={"auto"} />
          </div>
        </Col>
        <Col></Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column">
        <h3>Features</h3>
        <div className="cards d-flex justify-content-between">
          {/* card 1 */}
          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif"
              width={"300px"}
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Managing Vedios</Card.Title>
              <Card.Text className="text-dark">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* card 2 */}
          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Img
              variant="top"
              src="https://media.giphy.com/media/12dAkjipxibUSA/giphy.gif"
              width={"300px"}
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Watching History</Card.Title>
              <Card.Text className="text-dark">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* card 3 */}
          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Img
              variant="top"
              src="https://cdn.dribbble.com/users/1036808/screenshots/7282712/media/bf886fa984a0b8fdbed7c9ae0e7684f6.gif"
              width={"300px"}
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Managing Vedios</Card.Title>
              <Card.Text className="text-dark">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* card 4 */}
          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Img
              variant="top"
              src="https://cdn.dribbble.com/users/1036808/screenshots/7143535/media/c7a511fc2050f7b078812129d61d17e3.gif"
              width={"300px"}
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>Categorized Vedios</Card.Title>
              <Card.Text className="text-dark">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <div className="col-lg-5">
          <div className="wrapper">
            <h2 className="text-warning">Simple , Powerful & Faster</h2>
            <h6 className="mb-5">
              Play Everithing :
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, perferendis voluptatibus cumque dicta provident
                modi quibusdam beatae, quod vero, consequatur doloribus maxime
                odit esse a quis voluptate repudiandae explicabo ducimus.
              </span>
            </h6>
            <h6>
              Categorized Video :
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, perferendis voluptatibus cumque dicta provident
                modi quibusdam beatae, quod vero, consequatur doloribus maxime
                odit esse a quis voluptate repudiandae explicabo ducimus.
              </span>
            </h6>
            <h6>
              Managing History :
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, perferendis voluptatibus cumque dicta provident
                modi quibusdam beatae, quod vero, consequatur doloribus maxime
                odit esse a quis voluptate repudiandae explicabo ducimus.
              </span>
            </h6>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="vid-wrapper ms-3 mt-4 ">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uw5C8nkkyBs?si=PHpjV8nIAx7A-QGJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
      </div>

      </div>
    </>
  );
}

export default LandingPage;
