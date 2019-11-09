import React from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'

import Contributers from './contributers'
import Browse from './browse'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            contributers: [
                {
                    name:"Lauren Harlow",
                    profileImg:"https://miro.medium.com/fit/c/256/256/2*Pa8yKARuzP-vki1qOXakLg.jpeg",
                    description: "Lorem Ipsum and then some more",
                    links:{twitter: "https://twitter.com/lm_harlow", medium:"https://medium.com/@laurenmarie_1833", linkedin:"https://www.linkedin.com/in/lauren-harlow-838579155/"}
                },
                {
                    name:"David Tippett",
                    profileImg:"https://miro.medium.com/fit/c/256/256/2*Z62KFiLwUfsQbat-qyT09A.png",
                    description: "Lorem Ipsum and then some more",
                    links:{twitter: "https://twitter.com/dtaivpp", medium:"https://medium.com/@dtaivpp", linkedin:"https://www.linkedin.com/in/david-tippett/"}
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
                }
            ],
            tags:[]
        }
    }
    render(){
    return (
        <>
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#about">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#browse">Browse</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
            <div>
                <Browse audioFiles={this.state.audioFiles}/>
                <Contributers contributers={this.state.contributers} />
            </div>
        </>
        );
    }
}

export default App;
