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
        <Col md={2}>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Average Stake</Form.Label>
                <Form.Control size="sm" type="number"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Daily No</Form.Label>
                <Form.Control size="sm" type='number'/>
            </Form.Group>
            </Form>
        </Col>
        <Col>
        
        </Col>
          </Row>
          <Row>
            <Col>
            <p aria-hidden="true">
        <Placeholder md={8} />
      </p>

      <Placeholder.Button md={4} aria-hidden="true" />
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