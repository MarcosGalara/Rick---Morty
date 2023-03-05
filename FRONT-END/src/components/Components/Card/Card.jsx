import {StyleCard} from "./estilosCard";
import {CardImg} from "./estilosCard";
import {Titulos2} from "./estilosCard";
import {Titulos1} from "./estilosCard";
import {Titulos3} from "./estilosCard";
import {CloseCard} from "./estilosCard";
import { Link  } from "react-router-dom";
import React from  "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorites, deleteFavorites } from "../../../redux/actions-type/actions";


export default function Card({name ,species ,gender ,image ,onClose ,id}) {
   
   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){ 
         setIsFav(false)
         dispatch(deleteFavorites(id))
      }else{
         setIsFav(true)
         dispatch(addFavorites({name ,species ,gender ,image ,onClose ,id}))
      }
   }

   const myFavorites = useSelector(state => state.myFavorites);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);


   return (
      <StyleCard>
         <>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         </>
         <CloseCard onClick={onClose}>X</CloseCard>
         <Link to={`/detail/${id}`}>
            <Titulos1>{name}</Titulos1>
         </Link>
         <Titulos2>{species}</Titulos2>
         <Titulos3>{gender}</Titulos3>
         <CardImg src={image} alt=""></CardImg>
      </StyleCard>
   );
}

