import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SideBar from './sideBar';

function ContainerFluidBreakpointExample() {
  return (
    <Container fluid="md">
      <Row>
        <Col md={4}>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Col>
    <Col md={4}>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Col>
    <Col md={4}>
    <SideBar />
    </Col>
      </Row>     
        
    </Container>
  );
}

export default ContainerFluidBreakpointExample;