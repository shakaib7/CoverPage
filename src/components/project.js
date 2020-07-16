import React from "react";

import { Badge, Card, Button, ProgressBar, Row } from "react-bootstrap";

class Project extends React.Component {
  constructor(props) {
    super(props);

    // Bind the functions in this class to the class so that they can be referred to as this.props in child component when passed
    this.renderbadges = this.renderbadges.bind(this);
    this.configProgress = this.configProgress.bind(this);
  }
  state = {
    project: this.props.data,
  };

  //This function sorts the the badges based on their classification
  renderbadges() {
    let temp = [];
    if (!(typeof this.state.project.Resources[0] === "undefined")) {
      for (let i = 0; i < this.state.project.Resources[0].length; i++) {
        temp.push(
          <Badge variant="primary" className="mr-1 ml-1">
            {this.state.project.Resources[0][i]}
          </Badge>
        );
      }
    }
    if (!(typeof this.state.project.Resources[1] === "undefined")) {
      for (let i = 0; i < this.state.project.Resources[1].length; i++) {
        temp.push(
          <Badge variant="info" className="mr-1 ml-1">
            {this.state.project.Resources[1][i]}
          </Badge>
        );
      }
    }
    if (!(typeof this.state.project.Resources[2] === "undefined")) {
      for (let i = 0; i < this.state.project.Resources[2].length; i++) {
        temp.push(
          <Badge variant="success" className="mr-1 ml-1">
            {this.state.project.Resources[2][i]}
          </Badge>
        );
      }
    }
    if (!(typeof this.state.project.Resources[3] === "undefined")) {
      for (let i = 0; i < this.state.project.Resources[3].length; i++) {
        temp.push(
          <Badge variant="warning" className="mr-1 ml-1">
            {this.state.project.Resources[3][i]}
          </Badge>
        );
      }
    }
    return temp;
  }

  // This function assigns the correct color to the progress bar based on its completion status
  configProgress() {
    if (this.state.project.Completion < 50)
      return (
        <ProgressBar
          variant="warning"
          animated
          now={this.state.project.Completion}
        />
      );
    else if (this.state.project.Completion < 100)
      return (
        <ProgressBar
          variant="info"
          animated
          now={this.state.project.Completion}
        />
      );
    else return <ProgressBar variant="success" now={100} />;
  }

  render() {
    return (
      <Card border="info" className="mt-2 mb-2">
        <Card.Header as="h3">{this.state.project.Name}</Card.Header>
        <Card.Body>
          <Card.Title as="h5">{this.state.project.Subtitle}</Card.Title>
          <Card.Text>{this.state.project.Description}</Card.Text>
          <Card.Title as="h5">Languages/Libraries/Frameworks Used</Card.Title>
          {this.renderbadges()}
          <Card.Title as="h5">Completion status</Card.Title>
          {this.configProgress()}
          <Card.Text>{this.state.project.CompletionStatus}</Card.Text>
          <Row>
          <Button variant="primary" disabled>Inspect Repository</Button>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Project;
