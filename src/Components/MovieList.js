import React from 'react';
import Movie from './Movie';



export default class MovieList extends React.Component{
    render(){
        return(
            <>
               <h1 style={{textAlign: 'center'}}> here is a list of movies</h1>
                <Movie/>
            </>
        );
    };
}