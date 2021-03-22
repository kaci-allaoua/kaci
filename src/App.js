import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Footer from './component/layouts/Footer';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './component/pages/Home';
import Projects from './component/pages/Projects';
import Contacts from './component/pages/Contacts';
import Details from './component/pages/Details';
import PhotoMain from './component/pages/PhotoMain';
import SearchResultsPage from './component/pages/SearchResultsPage';
import NotFoundPage from './component/pages/NotFoundPage';
import Git from './component/static/Git';
import Product from './component/pages/Product';
import Game from './component/pages/Game';

class App extends Component{
  products = [];
  state = {
    searchText: "",
    data : []
  };
  
  fetchData(){
    fetch('http://127.0.0.1:8000/compact/landing/')
    .then(response=>response.json())
    .then((data)=>{
        this.products = data;
    });
  }

  handleRoute = route => () => {
    this.props.history.push({ pathname: route });
  };


  handleSearchInput = event => {
    this.fetchData();
    this.setState({
      searchText: event.target.value,
      data : this.products
    });
  };

  handleSearchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: "results",
        state: {
          searchText : this.state.searchText,
          data : this.products
        }
      });
    } else {
      alert("Please enter some search text!");
    }
  };

  render(){
    return (
        <div>
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
              <Form inline>
                <FormControl
                  onChange={this.handleSearchInput}
                  value={this.state.searchText}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button onClick={this.handleSearchSubmit} variant="outline-info">
                  Search
                </Button>
              </Form>
          </div>
          </nav>

          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/details" component={Details} />
            <Route path="/photoComparator" component={PhotoMain} />
            <Route path="/not-found-page" component={NotFoundPage} />
            <Route path="/results" component={SearchResultsPage} />
            <Route path="/compact" component={Product} />
            <Route path="/git" component={Git} />
            <Route path="/ticTac" component={Game} />
          </ Switch>
          <Footer />
      </div>
    );
  }
}
 
export default withRouter(App);

