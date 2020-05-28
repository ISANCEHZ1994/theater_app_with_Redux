import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleMovies } from '../store/actions'; // function needs curly boys{} or else it wont work


 export default function Theather(){

    const movies = useSelector( state => state.movies); 
    const dispatch = useDispatch();
    if(!movies.isLoaded){ 
        dispatch(handleMovies)
    }
    console.log(movies.isLoaded)

    return(
       
        <>
          <h1 style={{textAlign: 'center'}}> Welcome To The ISS Theater Deluxe  </h1>
            <div>
                History of some shit about this nice theater
            </div>
        </>
    );
};
