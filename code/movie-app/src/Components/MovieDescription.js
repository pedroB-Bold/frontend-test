import React from 'react';

const MovieDescription = (props) => {
    return (
        <div className='moviePageDescription'>
            <div className='moviePageTitle'>
                {props.title}
            </div>
            <div className='moviePagePlot'>
                <div id='moviePagePlotSection'>Plot</div>
                {props.plot}
            </div>
            <div class='moviePagePlotSectionOther'>
                {otherInfo('Cast', props.cast)}
                {otherInfo('Genre', props.genre)}
                {otherInfo('Director', props.director)}

            </div> 
        </div>
    )
}

const otherInfo = (title, list) => {
    return(
        <div class='moviePagePlotSectionOtherItem'>
            {title}
            <ul className='moviePageList'>
                { createList(list) }
            </ul> 
        </div>
    )
}

const createList = (list) => {
    let row = [];
    
    for(let i=0; i < list.length; i++){
        row.push(<li>{list[i].som}</li>)
    }

    return row;
}

export default MovieDescription;