import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
function AudioCard(props){
    return (
        <Col xs style={{
            paddingTop: '10px',
            paddingBottom: '10px'
        }}>
            <Card style={{ 
                width: '18rem',
                margin: 'auto',  
                }}>
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
        </Col>
    );
}

export default AudioCard;