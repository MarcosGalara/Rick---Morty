import React from "react";
import SearchBar from "./SearchBar.jsx";
import { DivNav } from "../Style-Components/estilosSearch";


export default function Nav(props){
    return(
        <>
            <DivNav>
                <SearchBar onSearch={props.handleAddChar} handleChange={props.handleChange}/>
            </DivNav>
        </>
    );
};

