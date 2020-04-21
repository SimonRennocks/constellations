import React, { Component } from "react";
import { ListGroup, Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap/'

import PlayBar from './PlayBar';
import TwoSideCard from './TwoSideCard';
import constellations from '../data/constellations'

function IndexCards() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Navbar bg="dark">
                            <Nav.Item >
                                <PlayBar />
                            </Nav.Item>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    {constellations.map(card => (
                        <Col key={card.name} xs={12} md={6}>
                            <TwoSideCard name={card.name} picture={card.picture} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );

}

export default IndexCards;