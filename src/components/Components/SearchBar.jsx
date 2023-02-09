import React from "react";
import { StyleButton } from "../Style-Components/estilosSearch.jsx"

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' onChange={props.handleChange}/>
         <StyleButton onClick={props.onSearch}>Agregar</StyleButton>
      </div>
   );
}
