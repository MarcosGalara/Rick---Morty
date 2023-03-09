const axios =  require('axios');
const { Character } = require('../DB_connection.js');

const getApiData = async () =>{
    try {
        //declaro dos variables una para iterar y la otra para almacenar mis promesas de la peticion
        let i = 1;
        let characters = [];
        // aca hago el llamado a la api, pasandole por query la iteracion del paginado
        while(i < 6){
            const apiData = await axios (`https://rickandmortyapi.com/api/character?page=${i}`);
        //pusheamos al array las promesas que nos devuelve la api ----> recordar que las promesas estan pendding
        // por eso el siguiente paso fuera del while es resolver esas problemas
            characters.push(apiData);
            i++; //aumentamos en cada iteracion el valor de i
        }
        //cuando tengamos todas las promesas en el array y las resolvemos con promise all, vamos a tener un array de promesas
        //a ese array le hacemos un .map donde por cada respuesta (previamente vamos a poner .data porque trabajamos con axios)
        //quiero solamente la prop results. Y a ese results le hacemos un mapeo para sacar la informacion que tenemos en character
        characters = (await Promise.all(characters)).map(res => res.data.
        results.map(char => {
            return({
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image
            })
        }))

        let allCharacters = [];
        characters.map(char => { allCharacters = allCharacters.concat(char)})

            return allCharacters;

    } catch (error) {
        return { error: error.message }
    }
}

// aca vamos a pushear todo nuestro array de personajes a nuestra base de datos
const saveApiData = async () => {
    try {
        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters)
        //bulkCreate nos permite pasarle un array de objetos y los crea uno por uno en la BD
        return allCharacters;
    } catch (error) {
        return {error: error.message}
    }
    
}

module.exports = {
    saveApiData
}