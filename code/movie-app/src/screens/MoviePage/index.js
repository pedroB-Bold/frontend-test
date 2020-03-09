import React from 'react';
import MovieDescription from '../../Components/MovieDescription';
import Header from '../../Components/Header';
import './MoviePage.css';

export default class MoviePage extends React.Component{
    constructor(props){
        super(props);

        let title, plot, cast, genre, director, poster;
        this.mockData();

        this.getParamsFromScreen();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
    }

    getParamsFromScreen = () => {
        if(this.props.location.state){        
            const { movieInfo } = this.props.location.state;

            this.title = this.getMovieTitle(movieInfo);
            this.plot = this.getPlot(movieInfo);
            this.director = this.getMovieDirector(movieInfo);
            this.cast = this.getMovieCast(movieInfo);
            this.genre = this.getMovieGenre(movieInfo);
            this.poster = this.getMoviePoster(movieInfo);
        }
    }

    getMovieTitle = (movieInfo) => {
        const mTitle = movieInfo.Title;
        if(mTitle){
            return mTitle;
        }
        else{
            return this.title;
        }
    }

    getPlot = (movieInfo) => {
        const mPlot = movieInfo.Plot;
        if(!mPlot || mPlot === 'N/A'){
            return this.plot;
        }
        else{
            return <>{mPlot}</>;
        }
    }

    getMovieDirector = (movieInfo) => {
        const mDirector = movieInfo.Director;

        if(mDirector){
            if(mDirector.lenght > 1){
                return mDirector.split(", ");
            }else{ 
                return [mDirector];
            }
        }
        else{
            return this.director;
        }
    }

    getMovieCast = (movieInfo) => {
       if(movieInfo.Actors){
            return movieInfo.Actors.split(", ");
        } 
        else{
            return this.cast;
        }
    }

    getMoviePoster = (movieInfo) => {
        const mPoster = movieInfo.Poster;
        if(!mPoster || mPoster === 'N/A'){
            return this.poster;
        }
        else{
            return mPoster;
        }
    }

    getMovieGenre = (movieInfo) => {
        const mGenre = movieInfo.Genre;
        
        if(mGenre){
            return mGenre.split(", ");
        }
        else{
            return this.genre;
        }
    }

    mockData = () => {
        this.title='Some Cool Title';
        this.plot = <> 
                        There is no info about the plot of this movie to show.
                        <br/>
                        Please check again in a few days
                        <br/>
                    </>;

        this.cast = "The cast, is unknown, at this time".split(", ");
        this.genre = "genre, is, unknown".split(", ");
        this.director = "Unknown Director".split(", ");
        this.poster = "https://www.w3schools.com/html/img_girl.jpg";
    }

    render() {
        return (
            <div className='moviePageContainer'>
                <Header navigateBack={"/"} btnText={'HOME'} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <div className='moviePageDetailContainer'>
                    <MovieDescription 
                        title={this.title} 
                        plot={this.plot} 
                        cast={this.cast} 
                        genre={this.genre} 
                        director={this.director}
                    />
                    
                    <div className='moviePagePosterContainer'>
                        <img
                            className="moviePageImg"
                            src={this.poster}
                            alt="movieImg"
                        />
                    </div>
                </div>
            </div>
        )
    }
}