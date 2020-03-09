import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./HomePage.css"
import MovieItem from "../../Components/MovieItem"
import Header from '../../Components/Header'
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
  
    renderMovies = () => {
      
      const nMovies = this.state.movies.length; //10;

      if(nMovies){
        let x =[];

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
                      <MovieItem title={title} poster={poster}/>
                    </Link>
                  )
        }
        // console.log(x)
        return x;
      }
     return <div className='noResultsFound'><p>No Movies were found!!!</p></div>
    }

    // movies = this.renderMovies();

    render() {
        return (
          <div className="homePageContainer">
            <Header value={this.state.text} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <div className="moviesContainer">
              {this.renderMovies()}
            </div>
          </div>
        );
    }
}