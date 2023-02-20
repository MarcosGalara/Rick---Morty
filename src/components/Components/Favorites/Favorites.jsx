import { StyleCard } from "../Card/estilosCard";
import { CardImg } from "../Card/estilosCard";
import { Titulos2 } from "../Card/estilosCard";
import { Titulos1 } from "../Card/estilosCard";
import { Titulos3 } from "../Card/estilosCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = ({name ,species ,gender ,image ,onClose ,id}) =>{
 
    const { myFavorites } = useSelector(state => state)

    return(
        <div>
            {
                myFavorites.map((character) =>{
                    return(
                        <div>
                            <StyleCard>
                                <Link to={`/detail/${character.id}`}>
                                    <Titulos1>{character.name}</Titulos1>
                                </Link>
                                <Titulos2>{character.species}</Titulos2>
                                <Titulos3>{character.gender}</Titulos3>
                                <CardImg src={character.image} alt=""></CardImg>
                            </StyleCard>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;