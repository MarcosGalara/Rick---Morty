import {StyleCard} from "./Style-Components/estilosCard";
import {CardImg} from "./Style-Components/estilosCard";
import {Titulos2} from "./Style-Components/estilosCard";
import {Titulos1} from "./Style-Components/estilosCard";
import {Titulos3} from "./Style-Components/estilosCard";
import {CloseCard} from "./Style-Components/estilosCard";


export default function Card({name,species,gender,image,onClose}) {
   return (
      <StyleCard>
         <CloseCard onClick={onClose}>X</CloseCard>
         <Titulos1>{name}</Titulos1>
         <Titulos2>{species}</Titulos2>
         <Titulos3>{gender}</Titulos3>
         <CardImg src={image} alt=""></CardImg>
      </StyleCard>
   );
}

