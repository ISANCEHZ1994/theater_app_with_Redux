import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { handleMovies } from '../store/actions'; // function needs curly boys{} or else it wont work
import Snacks from '../Components/Snacks';
import MovieList from './MovieList';


 export default function Theather(){

    // this is unnessessary to write IT CAN WORK but WHY would you do that? 
    //Redux does this for you so can just call it where ever you need it
    // in the end could not resolve how to put all these funcitons into the Reducers and actions folder


      const [state, setState] = useState({ // we are using hooks and giving 
        s:"", // a string to search the movie you are looking for
        results: [], // where we want to put our search results into
        selected: {} // when selecting a SPECIFIC movie - we want to see a everything that has to do with that movie
      });

      const apiUrl = 'http://www.omdbapi.com/?apikey=91302107';

      const search = (e) => {
        if(e.key === "Enter"){ // make sure the e in Enter is CAPITALIZE or it will NOT work
          axios(apiUrl + "&s=" + state.s).then( ({ data }) => {
            let results = data.Search
    
            setState( prevState => {
              return {...prevState, results: results}
            })
            console.log(data)
          })
        }; 
      }; 
      
      const handleInput = (e) => { 
        let s = e.target.value
    
        setState(preState => { 
          return { ...preState, s: s} 
        })
      };


    return(
       
        <>
          <h1 style={{textAlign: 'center'}}> Welcome To The ISS Theater Deluxe  </h1>
            <div style={{backgroundColor: 'red'}}>
                History of some shit about this nice theater
            </div>
            {/* {console.log(movies)} */}
            <MovieList
            />
            
            <Snacks/>
        </>
    );
};
