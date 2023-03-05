import styled from "styled-components";

//contorno de la carta
export const StyleCard = styled.div`
   background-color: white;
   width: 220px;
   height: 400px;
   border: 1px solid gray;
   border-radius: 10px;
   box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
   text-align: center;
   position: relative;
   margin: 20px auto;
` 
//imagen
export const CardImg = styled.img`
   width: 200px;
   height: 200px;
   object-fit: cover;
   border-radius: 0%;
   position: absolute;
   top: 60%;
   left: 50%;
   transform: translate(-50%, -50%);
`
//especie
export const Titulos2 = styled.h2`
   font-size: 18px;
   position: absolute;
   bottom: 10px;
   left: 50%;
   transform: translateX(-25%);
   width: 100%; 
`
//genero
export const Titulos3 = styled.h2`
   font-size: 18px;
   position: absolute;
   bottom: 10px;
   left: 50%;
   transform: translateX(-75%);
   width: 100%; 
`

//nombre
export const Titulos1 = styled.h2`
   font-size: 25px;
   font-weight: bold;
   width: 50%;
   text-align: center;
   
`
//boton de cerrar la carta
export const CloseCard = styled.button`
   background-color: red;
   color: white;
   position: absolute;
   top: 10px;
   right: 10px;
   padding: 5px;
   cursor: pointer;
   height: 29px;
`
// alinear tarjetas
export const Conteiner = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
`
