import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

function AudioCard(props){
    return (
        <Col md style={{
            marginTop: "10px",
            marginBottom: "10px"
        }}
        >
        <Card style={{ 
            width: '18rem',
            margin: 'auto',
            height: '100%'
            }}>
            <a href={props.src}>
                <Card.Img variant="top" src={props.featureImg} />
            </a>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Tags: {
                        props.tags.map(tag => {
                            return( 
                                <Badge pill variant="dark" style={{margin:"4px"}}> {tag} </Badge> 
                                ); 
                        })} 
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