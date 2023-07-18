import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SideBar from './sideBar';
import Form from 'react-bootstrap/Form'
import { Stack } from 'react-bootstrap';

import { useState } from 'react';
import SelectOption from './select';
import DisplayInfo from './display';

function ContainerFluidBreakpointExample() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectChange = (itemId) => {
    // Assuming you have a list of items with their information
    // Replace this with your data or fetch from an API
    const items = [
      {
        id: 1,
        name: "Stake",
        Mega_Millions: 400,
        Powerball_Game: 500,
        CASH4LIFE: 500,
        CASH4SCHOOL: 500,
        SET4LIFE: 300,
        MARYLAND: 100,
        GEORGIA: 100,
        FLORIDA: 50,
        WASHINGTON: 50,
        NEW_YORK: 50,
        MICHIGAN: 50,
        MINNESOTA: 200,
        ARIZONA: 50,
        MIAMI: 50,
        DALLAS: 50,
        DIRECT_GAMES: 0
      },
      {
        id: 2,
        "Game": "Ticket_Per_Day",
        "Mega_Millions": 20000,
        "Powerball_Game": 20000,
        "CASH4LIFE": 18000,
        "CASH4SCHOOL": 20000,
        "SET4LIFE": 20000,
        "MARYLAND": 20000,
        "GEORGIA": 10000,
        "FLORIDA": 10000,
        "WASHINGTON": 10000,
        "NEW YORK": 10000,
        "MICHIGAN": 10000,
        "MINNESOTA": 15000,
        "ARIZONA": 15000,
        "MIAMI": 10000,
        "DALLAS": 10000,
        "DIRECT_GAMES": 0
      },
      {
        id: 3,
        "Game": "Revenue",
        "Mega_Millions": 2920000000,
        "Powerball_Game": 3650000000,
        "CASH4LIFE": 3285000000,
        "CASH4SCHOOL": 3650000000,
        "SET4LIFE": 2190000000,
        "MARYLAND": 730000000,
        "GEORGIA": 365000000,
        "FLORIDA": 182500000,
        "WASHINGTON": 182500000,
        "NEW YORK": 182500000,
        "MICHIGAN": 182500000,
        "MINNESOTA": 1095000000,
        "ARIZONA": 273750000,
        "MIAMI": 182500000,
        "DALLAS": 182500000,
        "DIRECT_GAMES": 2372500000
      },
      {
        id: 4,
        "Game": "Commission_Ratio",
        "Mega_Millions": -876000000,
        "Powerball_Game": -1095000000,
        "CASH4LIFE": -985500000,
        "CASH4SCHOOL": -1095000000,
        "SET4LIFE": -657000000,
        "MARYLAND": -219000000,
        "GEORGIA": -109500000,
        "FLORIDA": -54750000,
        "WASHINGTON": -54750000,
        "NEW YORK": -54750000,
        "MICHIGAN": -54750000,
        "MINNESOTA": -328500000,
        "ARIZONA": -82125000,
        "MIAMI": -54750000,
        "DALLAS": -54750000,
        "DIRECT_GAMES": -711750000
      },
      {
        id: 5,
        "Game": "Payout",
        "Mega_Millions": -823863200,
        "Powerball_Game": -1542405750,
        "CASH4LIFE": -1477802400,
        "CASH4SCHOOL": -1508579000,
        "SET4LIFE": -761172114,
        "MARYLAND": -314992000,
        "GEORGIA": -120489000,
        "FLORIDA": -8772700,
        "WASHINGTON": -29410300,
        "NEW YORK": -22840400,
        "MICHIGAN": -25190950,
        "MINNESOTA": -494026500,
        "ARIZONA": -117650725,
        "MIAMI": -6935000,
        "DALLAS": -21345000,
        "DIRECT_GAMES": -230631032
      },
      {
        id: 6,
        "Game": "Second_Chance_Payout",
        "Mega_Millions": -17176471,
        "Powerball_Game": -17176471,
        "CASH4LIFE": -17176471,
        "CASH4SCHOOL": -17176471,
        "SET4LIFE": -17176471,
        "MARYLAND": -17176471,
        "GEORGIA": -17176471,
        "FLORIDA": -17176471,
        "WASHINGTON": -17176471,
        "NEW YORK": -17176471,
        "MICHIGAN": -17176471,
        "MINNESOTA": -17176471,
        "ARIZONA": -17176471,
        "MIAMI": -17176471,
        "DALLAS": -17176471,
        "DIRECT_GAMES": 0
      },
      {
        id: 7,
        "Game": "CONTRIBUTION",
        "Mega_Millions": 1202960329,
        "Powerball_Game": 995417779,
        "CASH4LIFE": 804521129,
        "CASH4SCHOOL": 1029244529,
        "SET4LIFE": 754651415,
        "MARYLAND": 178831529,
        "GEORGIA": 117834529,
        "FLORIDA": 101800829,
        "WASHINGTON": 81163229,
        "NEW YORK": 87733129,
        "MICHIGAN": 85382579,
        "MINNESOTA": 255297029,
        "ARIZONA": 56797804,
        "MIAMI": 103638529,
        "DALLAS": 89228529,
        "DIRECT_GAMES": 1430118968
      },
      {
        id: 8,
        "Game": "Education and healthcare Cost",
        "Mega_Millions": -292000000,
        "Powerball_Game": -182500000,
        "CASH4LIFE": 0,
        "CASH4SCHOOL": 0,
        "SET4LIFE": -109500000,
        "MARYLAND": 0,
        "GEORGIA": -36500000,
        "FLORIDA": -18250000,
        "WASHINGTON": -18250000,
        "NEW YORK": -18250000,
        "MICHIGAN": -18250000,
        "MINNESOTA": 0,
        "ARIZONA": 0,
        "MIAMI": -18250000,
        "DALLAS": -18250000,
        "DIRECT_GAMES": 0
      },
      {
        id: 9,
        "Game": "Admin and all projected expenses",
        "Mega_Millions": -292000000,
        "Powerball_Game": -365000000,
        "CASH4LIFE": -328500000,
        "CASH4SCHOOL": -365000000,
        "SET4LIFE": -219000000,
        "MARYLAND": -73000000,
        "GEORGIA": -36500000,
        "FLORIDA": -18250000,
        "WASHINGTON": -18250000,
        "NEW YORK": -18250000,
        "MICHIGAN": -18250000,
        "MINNESOTA": -109500000,
        "ARIZONA": -27375000,
        "MIAMI": -18250000,
        "DALLAS": -18250000,
        "DIRECT_GAMES": -237250000
      },
      {
        "S/N": 10,
        "Game": "Cash Reserves",
        "Mega_Millions": -292000000,
        "Powerball_Game": -365000000,
        "CASH4LIFE": -328500000,
        "CASH4SCHOOL": -365000000,
        "SET4LIFE": -219000000,
        "MARYLAND": -73000000,
        "GEORGIA": -36500000,
        "FLORIDA": -18250000,
        "WASHINGTON": -18250000,
        "NEW YORK": -18250000,
        "MICHIGAN": -18250000,
        "MINNESOTA": -109500000,
        "ARIZONA": -27375000,
        "MIAMI": -18250000,
        "DALLAS": -18250000,
        "DIRECT_GAMES": -237250000
      },
      {
        "S/N": 11,
        "Game": "MARGIN",
        "Mega_Millions": 326960329,
        "Powerball_Game": 82917779,
        "CASH4LIFE": 147521129,
        "CASH4SCHOOL": 299244529,
        "SET4LIFE": 207151415,
        "MARYLAND": 32831529,
        "GEORGIA": 8334529,
        "FLORIDA": 47050829,
        "WASHINGTON": 26413229,
        "NEW YORK": 32983129,
        "MICHIGAN": 30632579,
        "MINNESOTA": 36297029,
        "ARIZONA": 2047804,
        "MIAMI": 48888529,
        "DALLAS": 34478529,
        "DIRECT_GAMES": 955618968
      }
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
                      { id: 1, name: 'Mega Million' },
                      { id: 2, name: 'Powerball Game' },
                      { id: 3, name: 'CASH4LIFE' },
                      { id: 4, name: 'CASH4SCHOOL' },
                      { id: 5, name: 'SET4LIFE' },
                      { id: 6, name: 'MARYLAND' },
                      { id: 7, name: 'GEORGIA' },
                      { id: 8, name: 'FLORIDA' },
                      { id: 9, name: 'WASHINGTON' },
                      { id: 10, name: 'NEW YORK' },
                      { id: 11, name: 'MICHIGAN' },
                      { id: 12, name: 'MINNESOTA' },
                      { id: 13, name: 'ARIZONA' },
                      { id: 14, name: 'MIAMI' },
                      { id: 15, name: 'DALLAS' },
                      { id: 16, name: 'DIRECT GAMES' },
                    ]}
                    onChange={handleSelectChange}
                  />
                </Col>
                <Col>
                  <Card body>
                    <Card.Title>Assumptions</Card.Title>
                    <Row>
                      <DisplayInfo selectedItem={selectedItem} />
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
            <>
              <Row>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                    <Row className='mb-2'>
                        <Col>
                         
                        </Col>
                        <Col>
                          Ave Stake
                        </Col>
                        <Col>
                          Ave Ticket/Day
                        </Col>
                      </Row>
                      <Row className='mb-2'>
                        <Col md={1}>
                        <Form.Check />
                        </Col>
                        <Col>
                          Game 1
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                      </Row>
                      <Row className='mb-2'>
                      <Col md={1}>
                        <Form.Check />
                        </Col>
                        <Col>
                        Game 2
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                      </Row>
                      <Row className='mb-2'>
                      <Col md={1}>
                        <Form.Check />
                        </Col>
                        <Col>
                        Game 3
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                      </Row>
                      <Row className='mb-2'>
                      <Col md={1}>
                        <Form.Check />
                        </Col>
                        <Col>
                        Game 4
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                      </Row>
                      <Row>
                      <Col md={1}>
                        <Form.Check />
                        </Col>
                        <Col>
                        Game 5
                        </Col>
                        <Col>
                          <Form.Control />
                        </Col>
                        <Col>
                          <Form.Control  />
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                </Col>
                <Col md={4}>
                  <Card>
                    <Row>
                      <Col className='m-3'>
                      <Form.Label>Average Stake</Form.Label>
                      <Form.Control size="sm" />
                  
                      </Col>
                      <Col className='m-3'>
                      <Form.Label>Ave. Ticket/Day</Form.Label>
                  <Form.Control size="sm" />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  
                </Col>
              </Row>
            </>
            <div>
              <Row className="justify-content">
                <Col>
                  <Button variant="primary">Accept</Button>
                </Col>
                <Col md={9}>
                <Button variant="primary">Run Simulaion</Button>
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