import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./HomePage.css"
import MovieItem from "../../Components/MovieItem"

import {getMoviesOlderMovies, getMoviesByTitle, getMoviesFromAPI } from '../../api/moviesApi'

export default class HomePage extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        movies: [{'Title': 'The cool Movie'},{},{}],
        text: "search movie"
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(props){
      console.log("componentDidMount");

      this.getMovies("blade");

    }

    componentWillUnmount(props){
      console.log("componentWillUnmount");
    }

    // movies = [];

    getMovies = async (title) => {
      const movies = await getMoviesFromAPI(title);
      this.setState({ movies });

      console.log(this.state.movies);
      // this.movies = this.renderMovies();
    }

    handleSubmit(e) {
      e.preventDefault();
      // console.log("submit", e);
      this.getMovies(this.state.text);
    }

    handleChange(e) {
      this.setState({
        text: e.target.value
      });
    }

    header = () => (
      <div className="header">
        {/* <img
          className="logo"
          src="https://talentportugal.com/wp-content/uploads/listing-uploads/logo/2019/06/4dUkCtgE.jpg"
          alt="movieImg"
        /> */}
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            style={{ width: "100%" }}
            value={this.state.text}
            onChange={e => this.handleChange(e)}
          />
          <button>Add</button>
        </form>
      </div>
    );
    
    renderMovies = () => {
      let x =[];
      
      const nMovies = this.state.movies.length; //10;
      
      for(let i=0; i < nMovies; i++){
        const movie = this.state.movies[i];
        let title = movie.Title;
        let poster = movie.Poster;
        
      x.push( <Link
                to={{
                  pathname: "/"+title, /* /moviePage */
                  state: {
                    movieInfo: movie
                  }
                }}>
                  <MovieItem title={title + i} poster={poster}/>
                </Link>
              )
      }
      // console.log(x)
      return x;
    }

    // movies = this.renderMovies();

    render() {
        return (
          <div>
            {this.header()}
            <div className="moviesContainer">
              {this.renderMovies()}
            </div>
          </div>
        );
    }
}