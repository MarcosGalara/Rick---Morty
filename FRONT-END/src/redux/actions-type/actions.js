import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from "./types.js";
import axios from "axios";

//conectamos front-end con back-end
export const addFavorites = (favorite) =>{
    return async (dispatch) => {
        const response = await axios.post("http://localhost3001/rickandmorty/fav", favorite)

        const data =  response.data;

        return dispatch({
            type: ADD_FAVORITES,
            payload: data
        })
    }
}

export const deleteFavorites = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost3001/rickandmorty/fav/${id}`)

        const data =  response.data;

        return dispatch({
            type: DELETE_FAVORITES,
            payload: data
        })
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