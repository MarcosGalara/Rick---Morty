import {StyleCard} from "./estilosCard";
import {CardImg} from "./estilosCard";
import {Titulos2} from "./estilosCard";
import {Titulos1} from "./estilosCard";
import {Titulos3} from "./estilosCard";
import {CloseCard} from "./estilosCard";
import { Link  } from "react-router-dom";
import React from  "react";

export default function Card({name,species,gender,image,onClose,id}) {
   console.log(id)
   return (
      <StyleCard>
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

