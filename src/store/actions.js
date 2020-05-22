movieAPI = 'http://www.omdbapi.com/?apikey=91302107'

export const handleMoviesAsync = (movies) => {
    return { type: "FETCH_MOVIES", payload: movies}
};

export const handleMovies = () => {
    fetch(movieAPI)
    .then( resp => resp.json())
    .then( movies => {
        dispatch(handleMoviesAsync(movies))
    } )
};

