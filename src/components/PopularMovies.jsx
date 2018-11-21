import React, { Component } from "react";
import axios from "axios";
import { Grid, Col, Row, Media } from "react-bootstrap";
import Movie from './Movie.jsx';

const API_CALL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=95ccce525cb65ec0312e9082baab2093&language=en-US";
const API_KEY = "95ccce525cb65ec0312e9082baab2093";

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get(API_CALL)
      .then(function(response) {
        // handle success
        const movie = response.data.results;
        console.log('movie', movie);
        self.setState({
          movie
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
        //console.log("Movies" + data);              
      });

  }

  render() {
    return (
      <div className="popularRoot">      
        <Grid>
          <Row>
            {this.state.movie.map((movie, index) => (
              <Movie key={ `Movie-${ index }` } movieData={movie} {...index} />
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PopularMovies;
