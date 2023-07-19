import { SiBbciplayer } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Stack,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from "react-bootstrap";
import SideBar from "./sideBar";

import { useState } from "react";

function ContainerFluidBreakpointExample() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageList, setimageList] = useState([]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleIconClick = () => {
    // Handle the icon click event here
    console.log("Run Simulation!");
    setIsLoading(true);

    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
      setimageList([
        "https://res.cloudinary.com/netpoc-inc/image/upload/v1689637069/12_ogqa3m.jpg",
        "https://res.cloudinary.com/netpoc-inc/image/upload/v1689637069/12_ogqa3m.jpg",
      ]);
    }, 3000);
  };

  const renderTooltip = (text) => <Tooltip id="tooltip">{text}</Tooltip>;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numberRegex = /^\d*\.?\d*$/;

    if (!numberRegex.test(inputValue)) {
      e.target.value = inputValue.slice(0, -1);
    }
  };

  const listItems = [
    "Mega Million",
    "Powerball Game",
    "CASH4LIFE",
    "CASH4SCHOOL",
    "SET4LIFE",
    "MARYLAND",
    "GEORGIA",
    "FLORIDA",
    "WASHINGTON",
    "NEW YORK",
    "MICHIGAN",
    "MINNESOTA",
    "ARIZONA",
    "MIAMI",
    "DALLAS",
    "DIRECT GAMES",
  ];

  return (
    <Container fluid="md">
      <Row className="mt-5">
        <Col md={8}>
          <Stack direction="vertical" gap={5}>
            <div>
              <Row>
                <Col md={3}>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        style={{
                          fontFamily: ["Roboto", "sans-serif"],
                          fontSize: "13px",
                        }}
                      >
                        {selectedItem || "Select a Game"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        style={{
                          fontFamily: ["Roboto", "sans-serif"],
                          fontSize: "13px",
                        }}
                      >
                        {listItems.map((item, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => handleItemClick(item)}
                          >
                            {item.toLocaleLowerCase()}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
                <Col>
                  <Card body>
                    <Card.Title>Assumptions</Card.Title>
                    <Row>
                      <div className="card mt-3">
                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col">
                              <Form.Label className="custom-label">
                                Online Portion
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col">
                              <Form.Label className="custom-label">
                                Education
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col">
                              <Form.Label className="custom-label">
                                Admin & Projected Expense
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <br />
                            <div className="col">
                              <Form.Label className="custom-label">
                                Vendor Num
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col">
                              <Form.Label className="custom-label">
                                Cash Reserves
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col">
                              <Form.Label className="custom-label">
                                Commission Rate
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <Form.Label className="custom-label">Weekly Increment</Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col">
                              <Form.Label className="custom-label">
                                Second Chance Draw
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="00.00"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="col">
                              <Form.Label className="custom-label">
                                No of Games
                              </Form.Label>
                              <Form.Control
                                size="sm"
                                className="custom-control"
                                placeholder="000"
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
            <>
              <Row>
                <Col md={6}>
                  {selectedItem === "DIRECT GAMES" && (
                    <Card>
                      <Card.Body>
                        <Row className="mb-2">
                          <Col></Col>
                          <Col className="custom-label-dg">Avg. Stake</Col>
                          <Col className="custom-label-dg">Avg. Ticket/Day</Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={1}>
                            <Form.Check />
                          </Col>
                          <Col>Game 1</Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="00.00"
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="000"
                              onChange={handleInputChange}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={1}>
                            <Form.Check />
                          </Col>
                          <Col>Game 2</Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="00.00"
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="000"
                              onChange={handleInputChange}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={1}>
                            <Form.Check />
                          </Col>
                          <Col>Game 3</Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="00.00"
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="000"
                              onChange={handleInputChange}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={1}>
                            <Form.Check />
                          </Col>
                          <Col>Game 4</Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="00.00"
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="000"
                              onChange={handleInputChange}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={1}>
                            <Form.Check />
                          </Col>
                          <Col>Game 5</Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="00.00"
                              onChange={handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="custom-control-dg"
                              placeholder="000"
                              onChange={handleInputChange}
                            />
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  )}
                </Col>

                <Col></Col>
                <Col md={4}>
                {selectedItem !== "DIRECT GAMES" && (
                  <Card style={{ width: "11rem", className: "my-auto" }}>
                    <Row>
                      <Col className="m-2 ">
                        <Form.Label className="custom-label">
                          Avg Stake
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          className="custom-control"
                          placeholder="00.00"
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col className="m-2">
                        <Form.Label className="custom-label">
                          Avg Ticket/Day
                        </Form.Label>
                        <Form.Control
                          size="sm"
                          className="custom-control"
                          placeholder="000" 
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                  </Card>)}
                </Col>
                <Col></Col>
              </Row>
            </>

            <Container className="my-container">
              <Row className="align-items-center">
                <Col>
                  <Button variant="outline-primary">Accept</Button>
                </Col>
                <Col>
                  <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip("Run Simulation")}
                  >
                    <span>
                      <Button
                        variant="link"
                        onClick={handleIconClick}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Spinner
                              animation="grow"
                              size="m"
                              className="mr-2"
                              variant="primary"
                            />
                          </>
                        ) : (
                          <SiBbciplayer size={35} />
                        )}
                      </Button>
                    </span>
                  </OverlayTrigger>
                </Col>
                <Col>
                  <Button variant="outline-danger">Reset</Button>
                </Col>
              </Row>
            </Container>
          </Stack>
        </Col>

        <Col md={4}>
          <SideBar imageList={imageList} />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidBreakpointExample;
