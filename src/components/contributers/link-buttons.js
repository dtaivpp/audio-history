import React from 'react'
import { Button, Image } from "react-bootstrap";

function ButtonList(props){
    var buttonList = [];
    if (props.links.twitter !== ""){
        buttonList.push(
            <Button 
                variant="outline-secondary" 
                href={props.links.twitter}>
                    <Image src="../../assets/images/Rounded_Twitter_Small.svg" rounded />
            </Button>
        );
    }

    if (props.links.medium !== ""){
        buttonList.push(
            <Button 
                variant="outline-secondary" 
                href={props.links.medium}>
                    <Image src="../../assets/images/Rounded_Medium_Small.svg" rounded />
            </Button>
        );
    }

    if (props.links.linkedin !== ""){
        buttonList.push(
            <Button 
                variant="outline-secondary" 
                href={props.links.linkedin}>
                    <Image src="../../assets/images/Rounded_Linkedin_Small.svg" rounded />
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