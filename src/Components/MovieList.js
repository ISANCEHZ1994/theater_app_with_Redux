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
        <> {/*creating Fragments to not take up more space*/}
            <h1 style={{textAlign: 'center'}}> here is a list of movies</h1>
                    <div style={{backgroundColor: 'blue'}}>
                <Search 
                handleInput={handleInput}
                search={search}
                />
                <Movie/>
                </div>
        </>
    );
};