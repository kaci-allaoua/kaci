import React from 'react'
import ReactBootstrap, {Nav, Button, NavDropdown, Form, FormControl, FormGroup} from 'react-bootstrap'

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-info text-upperase" href="#" id="linkToHome">Kaci's Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link text-white text-upperase " href="home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white text-upperase" href="project">Projet</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white text-upperase" href="contacts">Contact me</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    );
}

export default Navbar;

