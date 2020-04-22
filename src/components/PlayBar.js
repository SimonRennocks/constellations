import React from "react";
import { Button } from 'react-bootstrap';

function PlayBar(props) {
    let {
        quadbtns,
        onClick,
        invertState,
        invertCardsClick
    } = props;

    return (
        <>
         <Button variant="outline-danger" className={invertState} onClick={invertCardsClick.bind(this)}>Flip</Button>
        {quadbtns.map(btn => (
            <Button key={btn.name} variant="outline-danger" className={btn.state} onClick={onClick.bind(this, parseInt(btn.name))}>
                QN{btn.name}
            </Button>
        ))}
        </>
    )
}

export default PlayBar;