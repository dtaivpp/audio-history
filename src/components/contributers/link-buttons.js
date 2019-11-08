import React from 'react'
import { Button, Image } from "react-bootstrap";

function ButtonList(props){
    var buttonList = [];
    if (props.links.twitter !== ""){
        buttonList.push(
            <Button 
                variant="outline-secondary" 
                href={props.links.twitter}>
                    <Image src="holder.js/171x180" rounded />
            </Button>
        );
    }

    if (props.links.medium !== ""){
        buttonList.push(
            <Button 
                variant="outline-secondary" 
                href={props.links.medium}>
                    <Image src="holder.js/171x180" rounded />
            </Button>
        );
    }

    if (props.links.linkedin !== ""){
        buttonList.push(
            <Button 
                variant="outline-secondary" 
                href={props.links.linkedin}>
                    <Image src="holder.js/171x180" rounded />
            </Button>
        );
    }

    return (
        <>
            {buttonList}
        </>
    );
}

export default ButtonList;