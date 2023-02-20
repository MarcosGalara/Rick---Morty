import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from "./types.js";

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

export const filterCards = (gender) =>{
    return{
        type: FILTER_CARDS,
        payload: gender
    }
}

export const orderCards = (id) =>{
    return{
        type: ORDER_CARDS,
        payload: id
    }
}