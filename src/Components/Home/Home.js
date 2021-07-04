import React from 'react';
import './Home.css';
import { NavLink, Row, Col, Card} from "react-bootstrap";
import img1 from '../../Images/bike.png';
import img2 from '../../Images/car.png';
import img3 from '../../Images/bus.png';
import img4 from '../../Images/train.png';

const Home = () => {
    return (
        <>
            <NavLink>
            <Row>
                <Col>
                    <Card>
                        <Card.Img className="image" variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>BIKE</Card.Title>                           
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img className="image" variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>CAR</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img className="image" variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>BUS</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img className="image" variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>TRAIN</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            </NavLink>
            </>
        
    );
};

export default Home;