import React from "react";
import SearchBar from "./SearchBar";
import { divNav } from "./Style-Components/estilosSearch"


export default function Nav(){
    return(
        <>
            <divNav>
                <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
            </divNav>
        </>
    );
};

