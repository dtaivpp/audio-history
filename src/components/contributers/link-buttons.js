import React from 'react'
import Rounded_Linkedin_Small from '../../assets/images/Rounded_Linkedin_Small.svg'
import Rounded_Medium_Small from '../../assets/images/Rounded_Medium_Small.svg'
import Rounded_Twitter_Small from '../../assets/images/Rounded_Twitter_Small.svg'

function ButtonList(props){
    var buttonList = [];
    if (props.links.twitter !== ""){
        buttonList.push(
            <a href={props.links.twitter}
               target="_blank"
               rel="noopener noreferrer">
                    <img src={Rounded_Twitter_Small} className="Twitter-logo" alt="Twitter" height="40px"/>
            </a>
        );
    }

    if (props.links.medium !== ""){
        buttonList.push(
            <a href={props.links.medium}
               target ="_blank"
               rel="noopener noreferrer">
                    <img src={Rounded_Medium_Small} className="Medium-logo" alt="Medium" height="40px"/>
            </a>
        );
    }

    if (props.links.linkedin !== ""){
        buttonList.push(
            <a href={props.links.linkedin}
               target ="_blank"
               rel="noopener noreferrer">
                    <img src={Rounded_Linkedin_Small} className="Linkedin-logo" alt="Linkedin" height="40px"/>
            </a>
        );
    }

    return (
        <>
            {buttonList}
        </>
    );
}

export default ButtonList;