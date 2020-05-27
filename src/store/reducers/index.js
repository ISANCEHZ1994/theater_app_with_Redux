import { combineReducers } from 'redux';

// import reducers from the files inside reducers
import movieReducer from './movieReducer';

const rootReducers = combineReducers({ // the name rootReducers will be exported using combineReducers to make it 'one' function

    // the name that will be used to reference the reducer - could be named whatever you want : the name of the reducer from the folder reducers
    movies: movieReducer,


});

export default rootReducers;