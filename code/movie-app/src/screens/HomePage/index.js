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
        text: "search movie",
        loading: true,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(props){
      this.getMovies("blade");
    }

    getMovies = async (title) => {
      // Start load
      this.setState({ loading: true });

      const movies = await getMoviesFromAPI(title);
      // End Load
      this.setState({ movies, loading: false });      
    }

    handleSubmit(e) {
      e.preventDefault();
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
        return x;
      }
     return <div className='noResultsFound'><p>No Movies were found!!!</p></div>
    }

    render() {
        return (
          <div className="homePageContainer">
            <Header value={this.state.text} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <div className="moviesContainer">
              { this.state.loading ?
                  <div className='loader' />
                  :
                  this.renderMovies()
              }
            </div>
          </div>
        );
    }
}