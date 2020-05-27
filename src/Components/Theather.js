import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleMovies } from '../store/actions'; // function needs curly boys{} or else it wont work


 export default function Theather(){

    const movies = useSelector( state => state.movies); 
    const dispatch = useDispatch();
    if(!movies.isLoaded){
        dispatch(handleMovies)
    }

    return(
        // <>
        //     Here we got the Theater Page
        // </>
        <div>
          {/* {console.log(movies.isLoaded)} */}
        
        </div>
    );
};

// export default class Theather extends React.Component{


// render(){
//     return(
//         <div>
//             Here is the Theater Page
//         </div>
//     )
// };


// };