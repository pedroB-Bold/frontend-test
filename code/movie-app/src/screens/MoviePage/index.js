import React from 'react';
import MovieDescription from '../../Components/MovieDescription';
import './MoviePage.css';
const poster = "https://www.w3schools.com/html/img_girl.jpg";

export default class MoviePage extends React.Component{
    constructor(props){
        super(props);

        let title, plot, list, cast, genre, director;
        this.mockData();

        this.getParamsFromScreen();
    }

    action = () => console.log("Go Home");

    getParamsFromScreen = () => {
        const { movieInfo } = this.props.location.state
        // console.log( this.props.location.state)
        // console.log(this.cast)

        this.title = this.getMovieTitle(movieInfo);
        this.plot = this.getPlot(movieInfo);
        this.director = this.getMovieDirector(movieInfo);
        this.cast = this.getMovieCast(movieInfo);
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
        if(mPlot){
            return <>{mPlot}</>;
        }
        else{
            return this.plot;
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
    }

    render() {
        return (
            <div className='moviePageContainer' onClick={this.action}>
                <div id='moviePageHomeBtn'>HOME</div>
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
                            src={poster}
                            alt="movieImg"
                        />
                    </div>
                </div>
            </div>
        )
    }
}