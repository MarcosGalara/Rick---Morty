import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { DivNav } from "../SearchBar/estilosSearch";




export default function Nav(props){
    return(
        <>
            <DivNav>
                <SearchBar onSearch={props.handleAddChar} handleChange={props.handleChange}/>
            </DivNav>
        </>
    );
};

