import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SideBar from './sideBar';
import Placeholder from 'react-bootstrap/Placeholder';
import { Stack } from 'react-bootstrap';

import { useState } from 'react';
import SelectOption from './select';
import DisplayInfo from './display';

function ContainerFluidBreakpointExample() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectChange = (itemId) => {
    // Assuming you have a list of items with their information
    // Replace this with your data or fetch from an API
    const items = [
      { id: 1, name: 'Item 1', description: 'Description for Item 1' },
      { id: 2, name: 'Item 2', description: 'Description for Item 2' },
      { id: 3, name: 'Item 3', description: 'Description for Item 3' },
    ];

    const selectedItem = items.find((item) => item.id === parseInt(itemId));
    setSelectedItem(selectedItem);
  };

  return (
    <Container fluid="md">
      <Row className="mt-5">
        <Col md={8}>
          <Stack direction='vertical' gap={5}>
            <div>
            <Row>
            <Col md={3}>
            <SelectOption
        options={[
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
        ]}
        onChange={handleSelectChange}
      />
            </Col>
            <Col>
              <Card body>
                <Card.Title>Assumptions</Card.Title>
                <Form>
                  <Row>
                  <DisplayInfo selectedItem={selectedItem} />
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
            </div>
            <>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
            </>
            <div>
            <Row>
                <Col>
                <Button variant="primary">Accept</Button>
                </Col>
                <Col md={9}>
                
                </Col>
                <Col>
                <Button variant="danger">Reset</Button>
                </Col>
            </Row>
            </div>
          </Stack>
        </Col>
              
        <Col md={4}>
        <SideBar />
        </Col>
      </Row>     
        
    </Container>
  );
}

export default ContainerFluidBreakpointExample;