import React, { Component } from "react";
import { Card } from 'react-bootstrap/'

function WordSide(props) {
    const {
        name,
        show,
        onClick
    } = props;

    let seen = "hide";
    if (show) {
        seen = "show"
    }

    return (

        <div className={seen}>
            <Card bg="danger">
                <Card.Body onClick={onClick.bind(null)}>
                    <Card.Text onClick={onClick.bind(null)}>{name}</Card.Text>
                </Card.Body>
            </Card></div>
    )
}

export default WordSide;