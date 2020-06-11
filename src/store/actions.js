import axios from 'axios';

const movieAPIBatman = 'http://www.omdbapi.com/?apikey=91302107&s=Batman' // this works because we are giving the finished ending to the API Search
const movieAPI = 'http://www.omdbapi.com/?apikey=91302107'



export const handleMoviesAsync = (movies) => {
    return { type: "FETCH_MOVIES", payload: movies}
};


// Note: might have to change my original code to mirror that movie database project
// When trying to console.log the movies it reveals as undefined

export const handleMovies = (dispatch) => { // <---------------------- We want to search for a specifc movie - can't show all because it needs to know what to even look for 
    fetch(movieAPIBatman)
    .then( resp => resp.json() )
    .then( ( {Search} ) => { //destructure the EXACT key from json response
        let movies = Search
        // console.log('after fetch', Search)
        dispatch(handleMoviesAsync(movies))
    })
};

export const handleSearchAsync = (search) => {
    return { type: "SEARCH_MOVIES", payload: search }
}

export const handleSearch = (e) => {
    if(e.key === "Enter"){ // make sure the e in Enter is CAPITALIZE 
      axios(apiUrl + "&s=" + state.s).then( ({ data }) => { // we want to destructure the data variable because we only want to use some specifc data
        let results = data.Search

        setState( prevState => {
          return {...prevState, results: results} // the search function will take the information from the axios(technically a fetch) and store it into the array 'results'
        })
        console.log(data)
        
      }) 
    }; 
  }; 

   export const handleInput = (e) => { 
    let s = e.target.value

    setState(preState => { // setState is the method that we made in the hooks above because we - since App function is not a class - a this. is not required
      return { ...preState, s: s} 
    })
  };

  export const handleOpenPopUp = (id) => {
    axios(apiUrl + "&i=" + id).then( ({ data }) => {
      let result = data
    //   console.log(result)
      setState(prevState => {
        return {...prevState, selected: result}
      })

    })
  };

  export const handleClosedPopUp = () => {
    setState( prevState => {
      return { ...prevState, selected: {} }
    })
  };