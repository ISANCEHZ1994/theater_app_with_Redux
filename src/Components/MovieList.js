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

export default function MovieList(props){
    return(
        <>
            <h1 style={{textAlign: 'center'}}> here is a list of movies</h1>
                <div style={{backgroundColor: 'blue'}}>
                    {console.log('here to find movies', props.movielist.movies )}
                        <Movie/>
                </div>
        </>
    );
};