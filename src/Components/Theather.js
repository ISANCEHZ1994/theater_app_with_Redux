import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


 export default function Theather(){

    const movies = useSelector( state => state.movies);
    const dispatch = useDispatch();
    if(!movies.isLoaded){
        dispatch()
    }
    return(
        <>

        </>
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