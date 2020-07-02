import React from 'react';
import Movie from './Movie';



// export default class MovieList extends React.Component{
//     render(){
//         return(
//             <>
//                <h1 style={{textAlign: 'center'}}> here is a list of movies</h1>
//                <div style={{backgroundColor: 'blue'}}>
//                    {console.log(this.props)}
//                     <Movie/>
//                </div>
//             </>
//         );
//     };
// }

export default function MovieList({ results }){
    return(
        <div className='results' >
            {/* <h1> Heres what we found!</h1> */}
                    <div style={{backgroundColor: 'blue',textAlign: 'center'}}>
            {results.map( result => ( <Movie key={result.imdbID} movie={result} /> )
            )}
                </div>

                
        </div>
    );
};