import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Button} from "react-bootstrap";
import img1 from '../../Images/bike.png';
import img2 from '../../Images/car.png';
import img3 from '../../Images/bus.png';
import img4 from '../../Images/train.png';

const Home = () => {
    return (
        <>
            
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>BIKE</Card.Title>
                            <Link to="/map"><Button variant="warning"> SELECT YOUR RIDE</Button></Link>                       
                        </Card.Body>
                        
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>CAR</Card.Title>
                            <Button variant="warning"> SELECT YOUR RIDE</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>BUS</Card.Title>
                            <Button variant="warning"> SELECT YOUR RIDE</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>TRAIN</Card.Title>
                            <Button variant="warning"> SELECT YOUR RIDE</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            
            </>
        
    );
};

export default Home;