import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Button} from "react-bootstrap";
import img1 from "../../Images/bike.png";
import img2 from "../../Images/car.png";
import img3 from "../../Images/bus.png";
import img4 from "../../Images/train.png";

const Home = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/map')
    }

  return (
    
      <Row className="row">
        <Col className="card">
          
            <Card.Img className="image" variant="top" src={img1} />
            <Card.Body>
              <Card.Title className="title">BIKE</Card.Title>
              <br />
              <Button className="button" onClick={() => handleClick()} variant="warning"> Click Ride</Button>
            </Card.Body>
          
        </Col>

        <Col className="card">
          
            <Card.Img className="image" variant="top" src={img2} />
            <Card.Body>
              <Card.Title className="title">CAR</Card.Title>
              <br />
              <Button className="button" onClick={() => handleClick()} variant="warning"> Click Ride</Button>
            </Card.Body>
          
        </Col>

        <Col className="card">
          
            <Card.Img className="image" variant="top" src={img3} />
            <Card.Body>
              <Card.Title className="title">BUS</Card.Title>
              <br />
              <Button className="button" onClick={() => handleClick()} variant="warning"> Click Ride</Button>
            </Card.Body>
          
        </Col>
        
        <Col className="card">
          
            <Card.Img className="image" variant="top" src={img4} />
            <Card.Body>
              <Card.Title className="title">TRAIN</Card.Title>
              <br />
              <Button className="button" onClick={() => handleClick()} variant="warning"> Click Ride</Button>
            </Card.Body>
          
        </Col>
        
        
      </Row>
    
  );
};

export default Home;
