import React, { Component } from "react";
import PopularMovies from "./components/PopularMovies";
import Recommendations from "./components/Recommendations";
import Home from "./components/Home";
import "./components/css/cssFile.css";
import { Breadcrumb, Jumbotron } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

const API_KEY = "95ccce525cb65ec0312e9082baab2093";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment className="App">
        <Breadcrumb className="bread">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/popular-movies">
            Popular Movies!
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/recommendations">
            Recommendations
          </Breadcrumb.Item>
        </Breadcrumb>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/popular-movies" component={PopularMovies} />
            <Route path="/recommendations" component={Recommendations} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
