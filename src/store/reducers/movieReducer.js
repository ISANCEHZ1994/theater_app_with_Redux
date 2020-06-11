const initialState = {
    isLoaded: false,
    s:"", // a string to search the movie you are looking for
    results: [], // where we want to put our search results into
    selected: {} // when selecting a SPECIFIC movie - we want to see a everything that has to do with that movie
}

export default function theatherReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_MOVIES":
                    return{
                        ...state,
                        movies: action.payload,
                        isLoaded: true
                    }
                    default:
                        return state;
            };
};

