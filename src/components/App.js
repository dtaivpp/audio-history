import React from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'

import Contributers from './contributers'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            contributers: [
                {
                    name:"Lauren Harlow",
                    description: "Lorem Ipsum and then some more",
                    links:{twitter: "https://twitter.com/lm_harlow", medium:"https://medium.com/@laurenmarie_1833", linkedin:""}
                },
                {
                    name:"David Tippett",
                    description: "Lorem Ipsum and then some more",
                    links:{twitter: "https://twitter.com/dtaivpp", medium:"https://medium.com/@dtaivpp", linkedin:""}
                }
            ],
            audioFiles:[],
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
                <Contributers contributers={this.state.contributers} />
            </div>
        </>
        );
    }
}

export default App;
