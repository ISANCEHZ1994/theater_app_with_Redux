const initialState = {
    movies: [],
    isLoaded: false,
    search: "",
    
}

export default function theatherReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_MOVIES":
                    // console.log('we are in reducer')
                    return{
                        ...state,
                        movies: action.payload,
                        isLoaded: true
                    }
                    default:
                        return state;
            };
};

