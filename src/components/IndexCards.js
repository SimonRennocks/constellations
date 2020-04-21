import React, { Component } from "react";
import { ListGroup, Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap/'

import PlayBar from './PlayBar';
import TwoSideCard from './TwoSideCard';

const cards = [{ name: "Orion", picture: "http://apod.nasa.gov/apod/image/0810/orion_gauvreau_big.jpg" }, { name: "Orion2", picture: "[Picture]" }, { name: "Orion3", picture: "[Picture]" }, { name: "Orion4", picture: "[Picture]" }]

function IndexCards() {
    return (
        <>
       
            <Navbar bg="dark">
                <Nav.Item >
                    <PlayBar />
                </Nav.Item>
            </Navbar>
            <Container>
            <Row>
                {cards.map(card => (
                    <Col key={card.name} md={6}>
                        <TwoSideCard name={card.name} picture={card.picture}/>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );

}

export default IndexCards;