import React, { useState }  from "react";
import { ListGroup, Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap/'
import WordSide from './WordSide';
import PictureSide from './PictureSide';

function TwoSideCard(props) {
    const [flip, SetFlip] = useState(true);
    const {
        name,
        picture
    } = props;
    

    function flipCard(e) {
        e.preventDefault();
        SetFlip(!flip);
    }

    return (
        <Card bg="dark">
            <Card.Body>
                <WordSide name={name} show={flip} onClick={flipCard}/>
                <PictureSide picture={picture} show={!flip} onClick={flipCard}/>
            </Card.Body>
        </Card>
    );
}

export default TwoSideCard;