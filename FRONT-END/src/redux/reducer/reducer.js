import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from "../actions-type/types.js";


const initialState = {
    myFavorites: [],
    allCharacters: [],
    allFavs: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            };
        case FILTER_CARDS:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === payload)
            return{
                ...state,
                myFavorites: allCharsFiltered
            }
        case ORDER_CARDS:
            return{
                ...state,
                myFavorites:
                    payload === "Ascendente"
                    ? state.allCharacters.sort((a, b) => a.id - b.id)
                    : state.allCharacters.sort((a, b) => b.id - a.id)
            }
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