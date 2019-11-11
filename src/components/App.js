import React from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Container, Row } from 'react-bootstrap'

// Pages 
import Contributers from './contributers'
import Browse from './stories'

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
                    name:"SampleInterview",
                    featureImg:"https://thecareforum.co.uk/wp-content/uploads/2017/03/Old-Person-Thumbs-Up.jpg",
                    tags:[
                        "Tag1",
                        "Tag2",
                        "Tag3"
                    ],
                    description:"This is my description",
                    src:"https://s3.bucket.location"
                },
                {
                    name:"SampleInterview",
                    featureImg:"https://ieltsintaiwan.files.wordpress.com/2015/09/oldchinesewoman.jpg?w=584",
                    tags:[
                        "WW2",
                        "WW3",
                        "Cival War"
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
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#browse">Browse</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div>
                <Container >
                    <Row className="justify-content-md-center">
                        <Switch>
                            <Route exact path='/'>
                                <Redirect to="/browse" />
                            </Route>

                            <Route path="/browse">
                                <Browse audioFiles={this.state.audioFiles}/>
                            </Route>

                            <Route path="/about"> 
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
