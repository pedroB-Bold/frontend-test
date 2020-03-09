import React from 'react';

const MovieDescription = (props) => {
    const otherInfoSection = (
        <>
            {otherInfo('Cast', props.cast)}
            {otherInfo('Genre', props.genre)}
            {otherInfo('Director', props.director)}
        </>   
    )
    
    return (
        <div className='moviePageDescription'>
            <div className='moviePageTitle'>
                {props.title}
            </div>
            <div className='moviePagePlot'>
                <div id='moviePagePlotSection'>Plot</div>
                {props.plot}
            </div>
            <div className='moviePagePlotSectionOther'>
                {otherInfoSection}
            </div> 
        </div>
    )
}

const otherInfo = (title, list) => {
    return(
        <div className='moviePagePlotSectionOtherItem'>
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
        row.push(<li>{list[i]}</li>)
    }

    return row;
}

export default MovieDescription;