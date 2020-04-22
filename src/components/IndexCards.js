import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap/'

import PlayBar from './PlayBar';
import TwoSideCard from './TwoSideCard';
import constellations from '../data/constellations'

function IndexCards() {
    let defaultQBtns = [{name:'1',state:'active'},{name:'2',state:''},{name:'3',state:''},{name:'4',state:''}]
    const [quadrant, setQuadrant] = useState(1);
    const [quadbtns, setQuadbtns] = useState(defaultQBtns)
    const [invert, setInvert] = useState(false);
    const [invertState, setInvertState] = useState("");
    
    let quadcons = constellations.filter(con => con.quadrant === quadrant);

    function quanClickHandler(id, e) {
        e.preventDefault();
        setQuadrant(id);

        for(let i = 0; i < 4; i++)
            defaultQBtns[i].state = "";
        defaultQBtns[id-1].state = "active";
        setQuadbtns(defaultQBtns);
        
    }

    function invertCardsClick(e){
        e.preventDefault();
        setInvert(!invert);
        if (invert){
            setInvertState("active");
        } else {
            setInvertState("");
        }
    }
    
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Navbar bg="dark">
                            <Nav.Item >
                                <PlayBar invertState={invertState} quadbtns={quadbtns} onClick={quanClickHandler} invertCardsClick={invertCardsClick}/>
                            </Nav.Item>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    {quadcons.map(card => (
                        <Col key={card.name} xs={12} md={6} xl={4}>
                            <TwoSideCard invert={invert} name={card.name} picture={card.picture} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );

}

export default IndexCards;