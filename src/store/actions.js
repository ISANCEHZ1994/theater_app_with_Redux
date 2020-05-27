const movieAPI = 'http://www.omdbapi.com/?apikey=91302107'

export const handleMoviesAsync = (movies) => {
    return { type: "FETCH_MOVIES", payload: movies}
};

export const handleMovies = (dispatch) => {
    fetch(movieAPI)
    .then( resp => resp.json() )
    .then( movies => {
        dispatch(handleMoviesAsync(movies))
    } )
};

