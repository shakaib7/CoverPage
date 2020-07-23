import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import GarageDoor from "../Devices/Garage";

export function HomeModal(props, state) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const populateArray = () =>  {
    
    console.log("Starting map");
    let d = props.data.Modal.Unit
    
    console.log(d);
    let temp = d.map((device) => (
      <Row>
        <GarageDoor subdata={device} key={device.id}>
          {console.log(device)}
        </GarageDoor>
      </Row>
    ));
    console.log("Ending map");
    console.log("called");
    console.log(temp);
    
  };

  return (

    <>
      <Button
        className="mt-5"
        as="pill"
        variant="outline-primary"
        size="lg"
        onClick={handleShow}
        block
      >
        {props.data.Name}
      </Button>

      <Modal show={show} onHide={handleClose} animation>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.Name}</Modal.Title>
        </Modal.Header>
        <Row className="mt-1 mb-1 ml-2 mr-4 justify-content-center">
          {populateArray()}
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
