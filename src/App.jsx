import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SideBar from './sideBar';
import Placeholder from 'react-bootstrap/Placeholder';

function ContainerFluidBreakpointExample() {
  return (
    <Container fluid="md">
      <Row className="mt-5">
        <Col md={8}>
          <Row>
          <Col md={3}>
          <Form.Label>Games</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select Game Type</option>
          <option value="1">Type A</option>
          <option value="2">Type B</option>
          <option value="3">Type C</option>
        </Form.Select>
        </Col>
        <Col>
          <Card body>
            <Card.Title>Assumptions</Card.Title>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Online Portion</Form.Label>
                  <Form.Control size="sm" placeholder="First name" />
                </Col>
                <Col>
                  <Form.Label>Education & Healthcare</Form.Label>
                  <Form.Control size="sm" placeholder="Last name" />
                </Col>
                <Col>
                  <Form.Label>Admin & All</Form.Label>
                  <Form.Control size="sm" placeholder="Last name" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Vendors Num</Form.Label>
                  <Form.Control size="sm" placeholder="First name" />
                </Col>
                <Col>
                  <Form.Label>Cash Reserves</Form.Label>
                  <Form.Control size="sm" placeholder="Last name" />
                </Col>
                <Col>
                  <Form.Label>Commision Rate</Form.Label>
                  <Form.Control size="sm" placeholder="Last name" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Weekly Increament</Form.Label>
                  <Form.Control size="sm" placeholder="First name" />
                </Col>
                <Col>
                  <Form.Label>Second Chance Draw</Form.Label>
                  <Form.Control size="sm" placeholder="Last name" />
                </Col>
                <Col>
                  <Form.Label>No of Games</Form.Label>
                  <Form.Control size="sm" placeholder="Last name" />
                </Col>
              </Row>
          </Form>
          </Card>
        </Col>        
          </Row>          
        </Col>
        <Col></Col>
        <Col md={3}>
        <SideBar />
        </Col>
      </Row>     
        
    </Container>
  );
}

export default ContainerFluidBreakpointExample;