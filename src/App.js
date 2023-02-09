import './App.css'
import React from  "react";
import Cards from './components/Components/Cards.jsx'
/*YA NO LO NECESITAMOS import characters from './data.js' */
import Nav from "./components/Components/Nav.jsx"
import { useState } from "react";


function App () {
  
  const [characters, setCharacters] = useState([]);

  const [inputChar, setInputChar] = useState("");

  let onSearch = (id) => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((data) => {
				data.name
					? characters.some((character) => character.id === data.id)
						? alert('Ya existe ese personaje, ingrese otro')
						: setCharacters([...characters, data])
					: alert('No hay personaje con ese ID');
			});
	}

  let handleChange = (event) =>{
    setInputChar(event.target.value)
  }

  let handleAddChar = () =>{
    onSearch(inputChar)
  }

  let onClose = (event) => {
    setCharacters(
      characters.filter(
        (character) => character.id !== event.currentTarjet.value,
      ),
    );
  };

  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav handleChange={handleChange} handleAddChar={handleAddChar}/>
      </div>
      <hr />
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App
