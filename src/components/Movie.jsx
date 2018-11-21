import React from 'react';
import axios from "axios";
import { Col } from "react-bootstrap";



class Movie extends React.Component  {
  
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
    .get('https://api.themoviedb.org/3/movie/'+this.props.movieData.id+'?api_key=95ccce525cb65ec0312e9082baab2093&language=en-US')
    .then(function(response) {
      // handle success      
      console.log(response.data.genres);
      const genre = response.data.genres;
      self.setState({
        genres: genre
      });
    })
    .catch(function(error) {
      // handle error        
    })

  }


  render () {

    //console.log('this props', props.movieData); //console log to test props passed to child to set props.propsname.property as value
  console.log('this state', this.state);
  return (
    <Col key={this.props.movieData.id} xs={6} md={4}>
      <div className="grid">
        <div className="poster">
          <img
            src={
              "https://image.tmdb.org/t/p/w500" + this.props.movieData.poster_path
            }
            width="356px"
            height="500px"
            alt={this.props.movieData.original_title}
          />
        </div>
        <div className="popular-movie-title">
          <strong>{this.props.movieData.title} </strong>
        </div>
        <div>
          {" "}
          <strong>Popularity: </strong>
          {this.props.movieData.popularity}
        </div>
        <div> Genres: {this.props.movieData.genre_ids} </div>
        <div className="popular-movies">
          {/*-- Nested If to display language based onoriginal labguage code --*/}
          Language: {this.props.movieData.original_language == 'en' ? 'English' : 
          [(this.props.movieData.original_language == 'hi' ? 'Hindi' : null),
           (this.props.movieData.original_language == 'ja' ? 'Japanese' : null),
           (this.props.movieData.original_language == 'it' ? 'Italian' : null)
          ]
        }
        <p>Genre: {this.state.genres.map(item => <span>{item.name} </span>)}</p>
        </div>
        <p />
      </div>
    </Col>
  )
  }
}

export default Movie;
