import React from "react";
import { Container, Row, Col, Image, Badge, Button } from "react-bootstrap";
import { Contacts } from "./contacts"
import {
  BsCodeSlash,
  BsFillTerminalFill,
  BsFillInfoSquareFill,
  BsServer,
} from "react-icons/bs";

class Bio extends React.Component {
  state = {
    programmingLanguages: this.props.bioInfo.Languages.map((language) => (
      <Badge className="ml-1 mr-1" variant="primary">
        {language}
      </Badge>
    )),
    database: this.props.bioInfo.Databases.map((base) => (
      <Badge className="ml-1 mr-1" variant="success">
        {base}
      </Badge>
    )),
    web: this.props.bioInfo.web.map((frameworks) => (
      <Badge className="ml-1 mr-1" variant="info">
        {frameworks}
      </Badge>
    )),

    profilepic: require("../images/Capture.PNG")
  };

  render() {
    return (
      <Container className="mb-2 mt-2 ml-2 mr-1">
        <Container className="Sticky">
          <Row className="justify-content-md-center ">
            <Image src={this.state.profilepic} thumbnail />
          </Row>
          <h2>Babken Nurijanyan</h2>
          <Row>
            <Col xs={1}>
              <BsFillInfoSquareFill></BsFillInfoSquareFill>
            </Col>
            <Col>
              <h4> About </h4>
            </Col>
          </Row>
          <Row>
            <Col>{this.props.bioInfo.About}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1}>
              <BsFillTerminalFill />
            </Col>
            <Col>
              <h4>Programming Languages</h4>
            </Col>
          </Row>
          <Row>
            <Col>{this.state.programmingLanguages}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1}>
              <BsCodeSlash />
            </Col>
            <Col>
              <h4>Web Technology</h4>
            </Col>
          </Row>
          <Row>
            <Col>{this.state.web}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1}>
              <BsServer />
            </Col>
            <Col>
              <h4>Database Technology</h4>
            </Col>
          </Row>
          <Row>
            <Col>{this.state.database}</Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Contacts>

              </Contacts>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Bio;
