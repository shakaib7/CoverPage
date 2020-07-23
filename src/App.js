import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import OptionCard from "./components/card";
import CustomNav from "./components/navbar";
//import profilePic from "..//images/Capture.PNG";

const titleCardArray = require("./resources/mainPagecards.json");

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    cards: titleCardArray.map((tempcard) => (
      <Col xs={4} className="mb-3 mt-3">
        <OptionCard data={tempcard}></OptionCard>
      </Col>
    )),
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <CustomNav></CustomNav>
        </Row>
        <Row className="mt-5 mb-5">
          <Col md={2}></Col>
          <Col md={8}>
            <Row>{this.state.cards}</Row>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
