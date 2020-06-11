// import axios from 'axios';

const movieAPIBatman = 'http://www.omdbapi.com/?apikey=91302107&s=Batman'
const movieAPI = 'http://www.omdbapi.com/?apikey=91302107'



export const handleMoviesAsync = (movies) => {
    return { type: "FETCH_MOVIES", payload: movies}
};


// Note: might have to change my original code to mirror that movie database project
// When trying to console.log the movies it reveals as undefined

export const handleMovies = (dispatch) => {
    fetch(movieAPIBatman)
    .then( resp => resp.json() )
    .then( ( {Search} ) => { //destructure the EXACT key from json response
        let movies = Search
        // console.log('after fetch', Search)
        dispatch(handleMoviesAsync(movies))
    })
};

