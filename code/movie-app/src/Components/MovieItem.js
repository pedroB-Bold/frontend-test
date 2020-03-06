import React from 'react';
import "./MovieItem.css";

const movieItem = (props) => {
    let title = props.title;
    let poster = props.poster;

    if(!title || title === 'N/A'){
        title = "Some cool movie";
    }

    if(!poster || poster === 'N/A'){
        poster = "https://www.w3schools.com/html/img_girl.jpg";
    }

    return (
        <div className="movieItemBox" onClick={() => console.log("Touch")}>
          <div className="movieTitle">{title}</div>
          <div>
            <img
              className="movieItemImg"
              src={poster}
              alt="movieImg"
            />
          </div>
        </div>
      );
}

export default movieItem;