import React from 'react'
import Card from 'react-bootstrap/Card'

function AudioCard(props){
    return (
        <Card style={{ width: '18rem' }}>
        <a href={props.src}>
            <Card.Img variant="top" src={props.featureImg} />
        </a>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                Tags: {props.tags.join(" ")} 
                <br/>
                <br/>
                Description: {props.description}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default AudioCard;