import React from 'react';


// export default class Movie extends React.Component{
//     render(){
//         return(
//             <>
//             <div style={{color: 'yellow',textAlign: 'center'}}>
//             <img src={result.Poster} alt="movie poster" />
//             <h3> {result.Title}</h3>
//             </div>
               
//             </>
//         )
//     }
// }

export default function Movie({ movie }){
    return(
        <div className='result'>
                 <h3> {movie.Title}</h3>
                <img src={movie.Poster} alt="movie poster" />
               
        </div>
    )
}