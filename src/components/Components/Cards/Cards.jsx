import Card from '../Card/Card';
import { Conteiner } from '../Card/estilosCard';
import React from "react";

export default function Cards(props) {
   const { characters } = props; //characters es un array que cada elemento es un objeto
   console.log(characters.id)
   return( 
      <Conteiner>
         {
            characters.map(({name, species, gender, image, id, onClose, status})=>{
               return <Card 
               key = {id}
               id = {id}
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               status={status}
               onClose = {onClose}
               />
            })
         }
      </Conteiner>
   )
}
