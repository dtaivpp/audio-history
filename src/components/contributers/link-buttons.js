import React from 'react'
import Rounded_Linkedin_Small from '../../assets/images/Rounded_Linkedin_Small.svg'
import Rounded_Medium_Small from '../../assets/images/Rounded_Medium_Small.svg'
import Rounded_Twitter_Small from '../../assets/images/Rounded_Twitter_Small.svg'
import Rounded_Github_Small from '../../assets/images/Rounded_Github_Small.svg'
import { Container, Row } from 'react-bootstrap'


function ButtonList(props){
    var buttonList = [];

    availButtons.forEach(item => {
        if (item.name in props.links){
            var element = buttonGenerate(item, props.links[item.name] );
            buttonList.push(
                element
            );
        }
    });

    return (
        <>
            <Container>
                <br/>
                <Row>{buttonList}</Row>
            </Container>
        </>
    );
}

function buttonGenerate(bttn, url) {
    return(
        <a href={url} style={{margin:'auto'}}
           target="_blank"
           rel="noopener noreferrer">
                <img src={bttn.image} className={bttn.name + "-logo"} alt={bttn.name} height={bttn.height}/>
        </a>
    );
}

const availButtons = [
    {
        name:'twitter',
        height: "40px",
        image: Rounded_Twitter_Small
    },
    {
        name:'github',
        height: "47px",
        image: Rounded_Github_Small

    },
    {
        name:'linkedin',
        height: "40px",
        image: Rounded_Linkedin_Small
    },
    {
        name: 'medium',
        height: "40px",
        image: Rounded_Medium_Small
    } 
]


export default ButtonList;