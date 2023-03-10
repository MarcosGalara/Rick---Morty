import './App.css';
import React from  "react";
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/NavBar/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Detail from "./components/CardDetail/CardDetail.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";
import Error404 from './components/Error404/Error404';
import Favorites from './components/Favorites/Favorites.jsx';


function App () {
  
  const [characters, setCharacters] = useState([]);
  const [inputChar, setInputChar] = useState("");
  //LOGIN
  const location = useLocation();

  const [access, setAccess] = useState(true);
  const username = "";
  const password = "";
  const navigate =  useNavigate();

  let onSearch = (id) => {
		fetch(`https://localhost:3001/rickandmorty/onsearch/${id}`)
			.then((response) => response.json())
			.then((data) => {
				data.name
					? characters.some((character) => character.id === data.id)
						? alert('Ya existe ese personaje, ingrese otro')
						: setCharacters([...characters, data])
					: alert('No hay personaje con ese ID');
			});
	}

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }
//evitamos que vaya al buscador de cartas cuando haya puesto mal el user y/o pass
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);


  let handleChange = (event) =>{
    setInputChar(event.target.value)
  }

  let handleAddChar = () =>{
    onSearch(inputChar)
  }

  let onClose = (event) => {
    setCharacters(
      (character) => character.id !== Number(event.currentTarget.value),
    );
  };

  
  return (
    <>
    <div className="App" style={{padding: "25px"} } >
      {location.pathname === "/" ? <Form login={login} /> : <Nav  handleChange={handleChange} handleAddChar={handleAddChar}/>}
      <Routes>
        {/* <Route path="*" element={<Error404 />} /> */}
        <Route path="/favorites" element={<Favorites />}></Route>
        
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}> </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:detailId' element={<Detail />}> </Route>
        
      </Routes>
      </div>
    </>
  )
}

export default App;
