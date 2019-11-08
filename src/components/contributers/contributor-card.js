import React from 'react'
import {Card}  from 'react-bootstrap'
import ButtonList from './link-buttons'

function ContributerCard(props){
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <ButtonList links={props.links} />
        </Card.Body>
        </Card>
    );
}



export default ContributerCard;