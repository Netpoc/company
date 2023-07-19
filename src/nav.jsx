import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import { AiOutlineLogout } from "react-icons/ai";
import { GrUserSettings, GrSettingsOption } from "react-icons/gr";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid="md">
        <Navbar.Brand href="#">Millioniare Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              Statistics{" "}
              <Badge pill bg="danger">
                84
              </Badge>
            </Nav.Link>
            <Nav.Link href="#action2">
              Notifications{" "}
              <Badge pill bg="danger">
                42
              </Badge>{" "}
            </Nav.Link>
            <Nav.Link href="#action2">
            
            {" "}
            <GrUserSettings size={20} />
            Profile Mgt
            </Nav.Link>
            <Nav.Link href="#action2">
            {" "}
            <GrSettingsOption size={20} />
              App Settings</Nav.Link>
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-danger">
            {" "}
            <AiOutlineLogout size={20} />
              </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
