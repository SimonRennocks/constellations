import React, { Component } from "react";
import { Card, Image } from 'react-bootstrap/'

function PictureSide(props) {
    let {
        picture,
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
                <Card.Body>
                    <Image src={picture} rounded onClick={onClick.bind(null)}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PictureSide;