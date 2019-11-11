import React from 'react'
import { Card } from 'react-bootstrap'
import ButtonList from './link-buttons'
import { Col } from 'react-bootstrap'

function ContributerCard(props){
    return (
        <Col md style={{
            marginTop: "10px",
            marginBottom: "10px"
        }}>
            <Card style={{ 
                width: '18rem',
                height: '100%', 
                margin:'auto'
                }}>
            <Card.Img variant="top" src={props.pfp} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <ButtonList links={props.links} />
            </Card.Body>
            </Card>
        </Col>
    );
}


export default ContributerCard;