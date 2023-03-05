import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { DivNav } from "../SearchBar/estilosSearch";
import { Link } from "react-router-dom";





export default function Nav(props){
    return(
        <>
            <DivNav>
                <Link to="/about">About</Link>
                <Link to="/home">Home</Link>
                <Link to="/">LOGOUT</Link>
                <Link to="/favorites">Favorites</Link>
                <SearchBar onSearch={props.handleAddChar} handleChange={props.handleChange}/>
            </DivNav>
        </>
    );
};

