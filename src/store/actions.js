// import axios from 'axios';

const movieAPI = 'http://www.omdbapi.com/?apikey=91302107&i'



export const handleMoviesAsync = (movies) => {
    return { type: "FETCH_MOVIES", payload: movies}
};


// Note: might have to change my original code to mirror that movie database project
// When trying to console.log the movies it reveals as undefined

export const handleMovies = (dispatch) => {
    fetch(movieAPI)
    .then( resp => resp.json() )
    .then( ({ movies }) => {
        dispatch(handleMoviesAsync(movies))
    })
};

