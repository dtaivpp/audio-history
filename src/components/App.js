import React from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'

function App() {
    return (
        <>
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <Nav.Link href="#features">Browse</Nav.Link>
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
        </>
    );
}

export default App;
