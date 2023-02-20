import { ADD_FAVORITES, DELETE_FAVORITES } from "../actions-type/types.js";


const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            };
        case DELETE_FAVORITES:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((favorite) =>{
                    return favorite.id !== payload;
                })
            };
        default:
            return {...state}
    }
}

export default reducer;