import React from 'react';
import MovieDescription from '../../Components/MovieDescription';
import './MoviePage.css';
const poster = "https://www.w3schools.com/html/img_girl.jpg";

export default class MoviePage extends React.Component{
    title='Some Cool Title';
    plot = <> 
             You can control the align-items value for individual elements with align-self. 
                You can also use margins to move individual elements up or down or left of right. 
                e.g. on a column layout you can move an individual flex item all the way to the left of the 
                container by setting margin-right: auto. 
                <br/>
                sdfsdfsdf
                <br/>
                <br/>
                <br/>

                dsfdsfsd
                <br/>

                fdsfsdfsdf
            </>

    list = [{'som': 'Coffee'}, {'som': 'Coffee'}, {'som': 'Coffee'},  {'som': 'Coffee'}]
    cast = this.list;
    genre = this.list;
    director = this.list;

    action = () => console.log("Go Home");

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