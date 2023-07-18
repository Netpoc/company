import {Button, Card, Row, Container, Col} from "react-bootstrap";
import { AiFillWarning } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function SideBar({ imageList }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Card style={{ width: "18rem", className: "my-auto" }}>
            <Card.Img
              variant="top"
              //   src="https://res.cloudinary.com/netpoc-inc/image/upload/v1689637069/12_ogqa3m.jpg"
              src={imageList[0]}
              className={`custom-card-img ${isExpanded ? "expanded" : ""}`}
              onClick={handleImageClick}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center">
                Simulation Result
              </Card.Title>
              <div className="d-flex justify-content-center align-items-center">
                {" "}
                <AiFillWarning size={35} />
              </div>

              <Card.Text className="d-flex">
                Carefully review this simulated result and be sure it meets
                business expectations
              </Card.Text>
              <Row>
                <Col>
                  <Button variant="outline-primary">Accept</Button>
                </Col>
                <Col></Col>
                <Col>
                  <Button variant="outline-danger">Reset</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card style={{ width: "18rem", className: "my-auto"  }}>
            <Card.Img
              variant="top"
              //   src="https://res.cloudinary.com/netpoc-inc/image/upload/v1689637069/12_ogqa3m.jpg"
              src={imageList[1]}
              className={`custom-card-img ${isExpanded ? "expanded" : ""}`}
              onClick={handleImageClick}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center">
                All Simulations
              </Card.Title>
              <div className="d-flex justify-content-center align-items-center">
                {" "}
                <AiFillWarning size={35} />
              </div>

              <Card.Text>
                Carefully review this simulated result and be sure it meets
                business expectations
              </Card.Text>
              <Row>
                <Col>
                  <Button variant="outline-primary">Accept</Button>
                </Col>
                <Col></Col>
                <Col>
                  <Button variant="outline-danger">Reset</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SideBar;
