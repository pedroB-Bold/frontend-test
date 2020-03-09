const API_KEY = 'b7bcea5f'
const BASE_URL = 'http://www.omdbapi.com/?';
let memoMovies = [];

export const getMoviesFromAPI = async (title) => {
    const movieList = checkExists(title);
    if(!movieList){
        memoMovies[title] = await getMoviesOlderMovies(title);
       
        console.log({memoMovies});
        return memoMovies[title];
    }

    return movieList;
}

export const getMoviesByTitle = async( movieTitle ) => {
    const MOVIE_URL = BASE_URL+'t='+movieTitle+'&apikey='+API_KEY;
    const config = { 
                    method: 'GET', 
                }
    await fetch(BASE_URL, config)
                .then( (e) => {
                   return e.json();                   
                 })
                .then( (e) => {
                    console.log({e});
                } )
}

// api only gets 1 movie, so this will get at least 5 movies, 1 from each year since 5 years ago
export const getMoviesOlderMovies = async(title) => {
        const year = 2019;
        const nOfYears = 5;
        let movies = [];

        for(let i = 1; i <= nOfYears; i++){
            const MOVIE_YEAR_URL = BASE_URL+'t='+title+'&y='+(year - i)+'&apikey='+API_KEY;
            const config = { 
                                method: 'GET', 
                            }

            await fetch(MOVIE_YEAR_URL, config)
                    .then( (e) => {
                        return e.json();                   
                    })
                    .then( (e) => {
                        if(!(e.Error === "Movie not found!")){
                            movies.push(e);
                        }
                    } )
        }
    
    // console.log({movies})
    return movies;
}


const checkExists = (movieTitle) => {
    const nItemsToStore = 20;

    console.log("should return false " + memoMovies[movieTitle])

    if(memoMovies[movieTitle]){
        return memoMovies[movieTitle];
    }else if(memoMovies.length === nItemsToStore){
        // remove 1 position
        memoMovies.shift();
    }
    
    return false;
}