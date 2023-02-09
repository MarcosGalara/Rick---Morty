import Card from './Card';
import { Conteiner } from '../Style-Components/estilosCard';

export default function Cards(props) {
   const { characters } = props; //characters es un array que cada elemento es un objeto
   return( 
      <Conteiner>
         {
            characters.map(({name, species, gender, image},index)=>{
               return <Card 
               key = {index}
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               onClose = {() => window.alert('Emulamos que se cierra la card')}
               />
            })
         }
      </Conteiner>
   )
}
