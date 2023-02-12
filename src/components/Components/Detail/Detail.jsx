import React from "react";
import { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EstilosDetail.module.css"


const Detail = () => {

    const navigate = useNavigate();
    let { detailId } = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.name)
                if (data.name) {
                setCharacter(data);
                } else {
                    alert("No hay personajes con ese ID");
                }
            })
            .catch((error) => {
                    alert("No hay personajes con ese ID");
            });
            return setCharacter({});
        }, [detailId]);

    let backToHome = () => {
        setCharacter({});
        navigate('/');
    };

    console.log(character); //solo pongo esto para que no me salga el warning de que no use la variable character

    return(
        <>
        <div>
            <div className="card mb-3" key={character.id} id={character.id}>
                <h3 className="card-header">{character.name}</h3>
                <div className="card-body">
                <h5 className="card-title">Me gustaria mostrar el origen</h5>
                <h6 className="card-subtitle text-muted">Me gustaria mostrar la localizacion</h6>
                </div>
                <img
						className="detailimg"
						src={character.image}
						alt={character.name}
					/>
                <div className="card-body">
						<p className="card-text">
							Me gustaria mostart la cantidad de capitulos que estuvo el
							personaje
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item" id="pisar">
							Especie: {character.species}
						</li>
						<li className="list-group-item" id="pisar">
							Genero: {character.gender}
						</li>
						<li className="list-group-item" id="pisar">
							Estado: {character.status}
						</li>
					</ul>
                <div className="card-body">
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={backToHome}
                    >Volver
                </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;