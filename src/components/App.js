import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Container, Row } from 'react-bootstrap'

// Pages 
import Contributers from './contributers'
import Stories from './stories'

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            contributers: [
                {
                    name:"Lauren Harlow",
                    profileImg:"https://miro.medium.com/fit/c/256/256/2*Pa8yKARuzP-vki1qOXakLg.jpeg",
                    description: "Passionate historian and primary driver of this project. Lauren is passionate about history preservation.",
                    links:{
                        twitter: "https://twitter.com/lm_harlow", 
                        medium:"https://medium.com/@laurenmarie_1833", 
                        linkedin:"https://www.linkedin.com/in/lauren-harlow-838579155/"}
                },
                {
                    name:"David Tippett",
                    profileImg:"https://miro.medium.com/fit/c/256/256/2*Z62KFiLwUfsQbat-qyT09A.png",
                    description: "Primary developer for this website. David loves creating applications that serve a purpose such as perserving history.",
                    links:{ twitter: "https://twitter.com/dtaivpp", 
                            medium:"https://medium.com/@dtaivpp", 
                            linkedin:"https://www.linkedin.com/in/david-tippett/",
                            github:"https://github.com/dtaivpp/audio-history"}
                }
            ],
            audioFiles:[
                {
                    name:"John Smith Interview",
                    featureImg:"https://thecareforum.co.uk/wp-content/uploads/2017/03/Old-Person-Thumbs-Up.jpg",
                    tags:[
                        "Coal Mines",
                        "Working",
                        "Family Life"
                    ],
                    description:"This is my description",
                    src:"https://s3.bucket.location"
                },
                {
                    name:"Alice Stevens Interview",
                    featureImg:"https://images.pexels.com/photos/432722/pexels-photo-432722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    tags:[
                        "WW2",
                        "Civil War"
                    ],
                    description:"This is my other desc",
                    src:"https://s3.bucket.location"
                },
                {
                    name:"Bernadette Interview",
                    featureImg:"https://images.pexels.com/photos/3037985/pexels-photo-3037985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    tags:[
                        "International Life",
                        "Pidgeons",
                        "Handicapped Living"
                    ],
                    description:"This is my other desc",
                    src:"https://s3.bucket.location"
                },
                {
                    name:"Rusty Afanso Interview",
                    featureImg:"https://images.pexels.com/photos/2598027/pexels-photo-2598027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    tags:[
                        "International Life",
                        "Middle East",
                        "Soldier"
                    ],
                    description:"This is my other desc",
                    src:"https://s3.bucket.location"
                }
            ],
            tags:[]
        }
    }
    render(){
    return (
        <Router>
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#about">AudioHistory</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#contributers">Contributers</Nav.Link>
                        <Nav.Link href="#stories">Stories</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div>
                <Container >
                    <Row className="justify-content-md-center">
                        <Switch>
                            <Route exact path='/'>
                                <Redirect to="/stories" />
                            </Route>

                            <Route path="/stories">
                                <Stories audioFiles={this.state.audioFiles}/>
                            </Route>

                            <Route path="/contributers"> 
                                <Contributers contributers={this.state.contributers} />
                            </Route>
                        </Switch>
                    </Row>
                </Container>
            </div>
        </Router>
        );
    }
}

export default App;
