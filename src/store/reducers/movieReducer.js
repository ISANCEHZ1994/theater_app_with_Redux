const initialState = {
    movies: [],
    isLoaded: false
}

export default function theatherReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_MOVIES":
                    return{
                        ...state,
                        movies: action.payload
                    }
                    
                    default:
                        return state;
            };
};

