import React from "react";
import { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EstilosDetail.module.css"


const Detail = () => {

    const navigate = useNavigate();
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((data) => {
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
        navigate('/home');
    };

    return(
        <>
        <div>
            <div className="conteiner" key={character?.id} id={character?.id}>
                <h3 className="card-header">{character?.name}</h3>
                <div className="card-body">
                <h5 className="card-title">origen</h5>
                <h6 className="card-subtitle text-muted">localizacion</h6>
                </div>
                <img className="detailimg" src={character?.image} alt={character?.name}/>
                <div className="card-body">
						<p className="card-text">
							cantidad de capitulos que estuvo el personaje
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item" id="pisar">
							Especie: {character?.species}
						</li>
						<li className="list-group-item" id="pisar">
							Genero: {character?.gender}
						</li>
						<li className="list-group-item" id="pisar">
							Estado: {character?.status}
						</li>
					</ul>
                <div className="card-body">
                <button type="button" className="btn btn-light" onClick={backToHome}>Volver
                </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;