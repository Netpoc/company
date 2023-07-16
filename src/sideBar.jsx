import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';

function SideBar() {
    return (
        <Container fluid="md">
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Row>
                <Col>
                <Button variant="primary">Accept</Button>
                </Col>
                <Col>
                <Button variant="danger">Reset</Button>
                </Col>
            </Row>
            
            
    </Card.Body>
</Card>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Row>
                <Col>
                <Button variant="primary">Accept</Button>
                </Col>
                <Col>
                <Button variant="danger">Reset</Button>
                </Col>
            </Row>
    </Card.Body>
</Card>
            </Col>
        </Row>        
        </Container>
    )
}

export default SideBar;