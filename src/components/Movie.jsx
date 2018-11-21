import React from 'react';
import { Col } from "react-bootstrap";

const Movie = props =>  {

 console.log('this props', props.movieData); //console log to test props passed to child to set props.propsname.property as value
  
  return (
    <Col key={props.movieData.id} xs={6} md={4}>
      <div className="grid">
        <div className="poster">
          <img
            src={
              "https://image.tmdb.org/t/p/w500" + props.movieData.poster_path
            }
            width="356px"
            height="500px"
            alt={props.movieData.original_title}
          />
        </div>
        <div className="popular-movie-title">
          <strong>{props.movieData.title} </strong>
        </div>
        <div>
          {" "}
          <strong>Popularity: </strong>
          {props.movieData.popularity}
        </div>
        <div> Genres: {props.movieData.genre_ids} </div>
        <div className="popular-movies">
          Language: {props.movieData.original_title} {/*-- property changed to original_title instead of original_language to display the original language --*/}
        </div>
        <p />
      </div>
    </Col>
  )
}

export default Movie;
