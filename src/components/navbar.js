import React from 'react';
import { Link } from "react-scroll";
import { Container, Navbar, Button } from 'react-bootstrap';

class CustomNav extends React.Component {
    state = {  }
    render() { 
        return ( <Container fluid>
            <Navbar>
          <Navbar.Text>Babken Nurijanyan</Navbar.Text>
          
          <Navbar.Collapse className="justify-content-end">
          <Link
                activeClass="active"
                to="scr"
                spy={false}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="success"   block className="ml-2" block>
                  {" "}
                  See Projects{" "}
                </Button>
              </Link>
          </Navbar.Collapse>
        </Navbar>
        </Container> );
    }
}
 
export default CustomNav;