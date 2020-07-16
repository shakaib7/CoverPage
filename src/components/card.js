import React from "react";
import { Badge, Card, Button } from "react-bootstrap";

class OptionCard extends React.Component {
  

  state = {
    // There is a problem loading images that stems from the webpack, this is a temporary fix, I will patch this out once I have more time on hand.
      images: [require("../images/GitHub.png"),require("../images/lnk.png"),require("../images/OpenCV.png")]
      
  };


 
  render() {
    //<Card.Image variant="top" src={this.props.data.image} />
    return (
      <Card  border="success" className="h-100 shadow-sm bg-white rounded">
        <Card.Body className="d-flex flex-column">
        <Card.Img variant="top" src={this.state.images[this.props.data.id]} />
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">
              {this.props.data.name}
            </Card.Title>
          </div>
          <Card.Text className="text-secondary">
            {this.props.data.desc}
          </Card.Text>
          <Button href={this.props.data.Link} className="mt-auto font-weight-bold" variant="success" block >
            Go To
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default OptionCard;
