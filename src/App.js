import './App.css'
import React from  "react";
import Cards from './components/Components/Cards/Cards.jsx'
import Nav from "./components/Components/Nav/Nav.jsx"
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import Detail from "./components/Components/Detail/Detail.jsx"
import About from "./components/Components/About/About.jsx"
import Form from "./components/Form/Form.jsx";


function App () {
  
  const [characters, setCharacters] = useState([]);
  const [inputChar, setInputChar] = useState("");
  //LOGIN
  const [access, setAccess] = useState(false);
  const username = "marcos.galara08@gmail.com";
  const password = "asd123";
  const navigate =  useNavigate();

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

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/');
    }
  }
//evitamos que vaya al buscador de cartas cuando haya puesto mal el user y/o pass
  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  let handleChange = (event) =>{
    setInputChar(event.target.value)
  }

  let handleAddChar = () =>{
    onSearch(inputChar)
  }

  let onClose = (event) => {
    setCharacters(
      characters.filter(
        (character) => character.id !== Number(event.currentTarjet.value),
      ),
    );
  };

  console.log(characters)
  return (
    <>
      <Nav  handleChange={handleChange} handleAddChar={handleAddChar}/>
      <Routes>
        <Route path="/home" element={<Form login={login}/>}/>
        <Route path="/" element ={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail />}/>
      </Routes>
    </>
  )
}

export default App
