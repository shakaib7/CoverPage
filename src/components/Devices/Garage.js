import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class GarageDoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col xs={5}>
          <h5>{this.props.subdata.Name}</h5>
        </Col>
        <Col xs={5}>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Open/Close"
              //onChange={handleChange}
            />
          </Form>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default GarageDoor;
