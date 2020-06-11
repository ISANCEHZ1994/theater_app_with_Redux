import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleMovies } from '../store/actions'; // function needs curly boys{} or else it wont work
import Snacks from '../Components/Snacks';
import MovieList from './MovieList';


 export default function Theather(){

    const movies = useSelector( state => state.movies); 
    const dispatch = useDispatch();


    // this is unnessessary to write IT CAN WORK but WHY would you do that? 
    //Redux does this for you so can just call it where ever you need it

    // const [state, setState] = useState({  <--------------------------
    //     movielist: movies,
    // }); 

    
    if(!movies.isLoaded){ 
        dispatch(handleMovies)
    }
    // console.log(movies.isLoaded)

    return(
       
        <>
          <h1 style={{textAlign: 'center'}}> Welcome To The ISS Theater Deluxe  </h1>
            <div style={{backgroundColor: 'red'}}>
                History of some shit about this nice theater
            </div>
            {/* {console.log(movies)} */}
            <MovieList
            movielist={movies}/>
            
            <Snacks/>
        </>
    );
};
