import React, { useState }  from "react";
import { ListGroup, Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap/'
import WordSide from './WordSide';
import PictureSide from './PictureSide';

function TwoSideCard(props) {
    const {
        name,
        picture,
        invert
    } = props;
    console.log(invert);
    const [showWord, setShowWord] = useState(false);
   
    console.log(showWord);

    function flipCard(e) {
        e.preventDefault();
        setShowWord(!showWord);
    }

    let cardState = showWord;
    if (invert){
        cardState = !cardState;
    } 

    return (
        <Card bg="dark">
            <Card.Body>
                <WordSide name={name} show={cardState} onClick={flipCard}/>
                <PictureSide picture={picture} show={!cardState} onClick={flipCard}/>
            </Card.Body>
        </Card>
    );
}

export default TwoSideCard;