import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Snack from './Snack';



export default class Snacks extends React.Component{


    render(){
        return(
            <div>
                <h1 style={{textAlign: 'center'}}> Fancy some snacks? (Snack Section) </h1>
               I want to create buttons this time not CSS buttons
               <Snack/>
            </div>
        )
    }
};