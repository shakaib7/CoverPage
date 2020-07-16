import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

export function Contacts() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        as="pill"
        variant="outline-success"
        size="lg"
        onClick={handleShow}
        block
      >
        Contact
      </Button>

      <Modal show={show} onHide={handleClose} animation>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Row className="mt-1 mb-1 ml-2 mr-4 justify-content-center">
          <Col  > 
          <h5 >
            <BsFillEnvelopeFill/> Email
          </h5>
          </Col>
          <Col>bnurijanyan@myseneca.ca</Col>
        </Row>
        
          
          
       

        <Row className="mt-1 mb-1 ml-2 mr-4 justify-content-center">
          <Col  > 
          <h5 >
            <AiFillPhone/> Phone Number: 
          </h5>
          </Col>
          <Col>(647) - 467 - 9867</Col>
        </Row>
        
       
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
