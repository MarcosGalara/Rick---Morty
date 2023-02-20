import { ADD_FAVORITES, DELETE_FAVORITES } from "./types.js";

export const addFavorites = (favorite) =>{
    return{
        type: ADD_FAVORITES,
        payload: favorite,
    }
}

export const deleteFavorites = (id) => {
    return{
        type: DELETE_FAVORITES,
        payload: id
    }
}