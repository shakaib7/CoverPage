import React from "react";


import { Card} from "react-bootstrap";
import {HomeModal}  from "./Views/NavButton"

import {
  BsFillHouseFill,
  BsFillDisplayFill,
  BsMusicNoteBeamed,
  BsPlug,
  BsFillPlusCircleFill
} from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { WiThermometer } from "react-icons/wi";

class OptionCard extends React.Component {
  constructor(props) {
    super(props);
    this.pickImage = this.pickImage.bind(this);
  }


  state = {
    images:
    {
     "BsFillHouseFill": BsFillHouseFill,
      "BsFillDisplayFill":BsFillDisplayFill,
      "GiLightBulb":GiLightBulb ,
      "BsMusicNoteBeamed":BsMusicNoteBeamed,
      "BsPlug":BsPlug,
      "BsFillPlusCircleFill":BsFillPlusCircleFill,
      "WiThermometer": WiThermometer
    }
      
  };

  //Dynamically chooses what image to display based on the Image string in the data
  pickImage()
  {
    var Img = this.state.images[this.props.data.Image]
  return  ( 
  <div className="p-2 d-flex justify-content-md-center"  style={{color: 'SteelBlue'}}>
  <Img size={64} />
    </div>)
    
  }



  render() {
    //<Card.Image variant="top" src={this.props.data.image} />
    return (
      <Card  border="primary" className="h-60 shadow-sm bg-white rounded ">
        <Card.Body className="d-flex flex-column justify-content-md-center">
          {this.pickImage("This")}

          <HomeModal  data={this.props.data}></HomeModal>
        </Card.Body>
      </Card>
    );
  }
}

export default OptionCard;
