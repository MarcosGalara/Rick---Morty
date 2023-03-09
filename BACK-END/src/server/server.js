const express = require("express");
const app = express();
const axios  = require("axios");
const cors = require("cors");
const getAllChars = require('../controllers/getAllChars.js');


//usamos el middleware
app.use(express.json());
app.use(cors());

//requerimos las rutas a definir previamente

app.get('/rickandmorty/allCharacters', async (req, res) => {
    try {
        const allCharacters  = await getAllChars();

        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(400).send('Hubo un problema')
    }
})

app.get("/rickandmorty/character/:id" ,async (req, res) =>{
    
    
    try {
        const { id } = req.params;

        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)

        const data = response.data

        const infoCharacter = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }

        res.status(200).json(infoCharacter);

    } catch (error) {
        res.status(500).json(error.message)
    }
})

let fav = [];

app.get("/rickandmorty/fav", (req, res) =>{
    

    res.status(200).json(fav);
})

app.post("/rickandmorty/fav", (req, res) =>{
    

    fav.push(req.body);

    res.status(200).send("Se guardaron correctamente los datos");
})

app.delete("/rickandmorty/fav/:id", (req, res) =>{
    

    const { id } = req.params;

    const favFiltered = fav.filter(char => char.id === Number(id));
    fav = favFiltered;

    res.status(200).send("Se elimino correctamente")
})

module.exports = app;