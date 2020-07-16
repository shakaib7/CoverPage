import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Badge,
  CardGroup,
  CardDeck,
  Alert
} from "react-bootstrap";
import OptionCard from "./components/card";
import Bio from "./components/bio";
import Project from "./components/project";
import CustomNav from "./components/navbar";
import { Link } from "react-scroll";
//import profilePic from "..//images/Capture.PNG";

const cardArray = require("./data.json");
const biodata = require("./bio.json");
const projectData = require("./project.json");
class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind the functions in this class to the class so that they can be referred to as this.props in child component when passed
    this.populateProjects = this.populateProjects.bind(this);
  }

  state = {
    cards: cardArray.map((tempCard) => (
      <Col xs={12 / cardArray.length} className="mb-5" key={tempCard.id}>
        <OptionCard data={tempCard}></OptionCard>
      </Col>
    )),
    projects: this.populateProjects(),
  };

  //Custom function that ensures that all the projects are populated as twins, in the case of an odd number of projects the function creates an empt col object instead
  populateProjects() {
    let temp = [];
    let i = 0;
    //let stringLengths = this.calculateLengths();

    while (i < projectData.length) {
      let cache = [];
      if (
        !(typeof projectData[i] === "undefined") &&
        !(typeof projectData[i + 1] === "undefined")
      ) {
        cache.push(projectData[i]);
        cache.push(projectData[i + 1]);
        let row = cache.map((project) => (
          <Col className="mt-2 mb-2 ml-2 mr-2" key={project.ID}>
            <Project data={project} />
          </Col>
        ));
        temp.push(<Row>{row}</Row>);
      }

      i = i + 2;
      cache = [];
    }

    return temp;
  }

  findLength(cache) {
    let subLength = cache[0].Subtitle.length;
    let descLength = cache[0].Description.length;
    let compLength = cache[0].CompletionStatus.length;

    if (cache[1].Subtitle.length > subLength)
      subLength = cache[1].Subtitle.length;

    if (cache[1].Description.length > descLength)
      descLength = cache[1].Description.length;

    if (cache[1].CompletionStatus.length > compLength)
      compLength = cache[1].CompletionStatus.length;
  }

  lengthen() {}

  render() {
    return (
      <Container fluid>
        <CustomNav></CustomNav>
        <Row>
          <Col md={3}>
            <Bio /*pic={this.state.profilePic}*/ bioInfo={biodata}></Bio>
          </Col>
          <Col>
            <Row className="mb-1 mt-2 ml-1">
              <h1>My Portfolio</h1>
            </Row>

            <Row>{this.state.cards}</Row>
            <Row>
              <Alert variant="warning">
                <Alert.Heading>Project Debugging</Alert.Heading>
                <p>
                Hello, All of the project repositories are currently undergoing "Sanitization". So they are currently unavailable, 
                Some of them are projects from previous courses and I am not allowed to share them as they may reveal solutions to future students, 
                effectively counting as plagiarism. And until I figure out an effective workaround I will be disabling these repositories. 
                </p>
                <p>
                Also, I am working on making sure that the projects line up, so they do not look asymmetrical, the problem is the character lengths are different. I
                Have a fix for this, it just needs to be tested and deployed.
                </p>
                <hr />
                <p className="mb-0">
                If you wish to view them please contact me directly.
                </p>
              </Alert>
            </Row>
          </Col>
        </Row>
        <Row id="scr" className="mt-4 mb-3 justify-content-md-center">
          <h1 className="justify-content-md-center ">
            <Badge variant="info">My Projects</Badge>
          </h1>
        </Row>
        <Container fluid>{this.state.projects}</Container>
      </Container>
    );
  }
}

export default App;
