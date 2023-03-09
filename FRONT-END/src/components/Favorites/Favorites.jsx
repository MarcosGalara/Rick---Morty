import { StyleCard } from "../Card/estilosCard";
import { CardImg } from "../Card/estilosCard";
import { Titulos2 } from "../Card/estilosCard";
import { Titulos1 } from "../Card/estilosCard";
import { Titulos3 } from "../Card/estilosCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderCards } from "../../redux/actions-type/actions.js";
import { filterCards } from "../../redux/actions-type/actions.js";

const Favorites = ({name ,species ,gender ,image ,onClose ,id}) =>{

    const { myFavorites } = useSelector(state => state)

    const dispatch = useDispatch();

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <div>
                <select onChange={handlerOrder}>
                    <option value="order" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
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