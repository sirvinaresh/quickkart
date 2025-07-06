import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";
function Foot() {
  return (
    <>
      <Container className="mt-4 py-3 shadow-lg  text-center shadow " fluid >
        <Row className="">
          <Col lg={4} md={4} sm={12} ><img src={require('../images/canvas-logo.png')}  style={{height:'50px'}} /></Col>
          <Col lg={4} md={4} sm={12} className=" d-flex  justify-content-center align-items-center"><p >@2025 - Quick Kart</p></Col>
          <Col lg={4} md={4} sm={12}  className="fs-4 d-flex justify-content-center align-items-center gap-4 "><FaFacebook /><FaInstagram /><FaTwitter /><FaLinkedin /></Col>
        </Row>
      </Container>
    </>
  );
}

export default Foot;
