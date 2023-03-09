const express = require("express");
const app = express();
const axios  = require("axios")
const cors = require("cors")

app.use(cors())
app.use(express.json());



app.get("/rickandmorty/detail/:detailId", async (req, res)=>{
    

    try {
        const { detailId } = req.params;
        //aca solo cambia a character id que la propiedad data la incluimos en la constante response para ahorra una linea de codigo
        const response = (await axios(`https://rickandmortyapi.com/api/character/${detailId}`)).data;
        // sino podemos hacer destructuring de { data } en ves de la constante response:
        /* const { data } = await axios(`https://rickandmortyapi.com/api/character/${detailId}`); */
        const infoCharacterDetail = {
            name: response?.name,
            status: response?.status,
            species: response?.species,
            gender: response?.gender,
            origin: response?.origin,
            image: response?.image
        }

        res.status(200).json(infoCharacterDetail);

    } catch (error) {
        res.status(500).json(error.message);
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


/* const http = require("http");
const getCharDetail = require("../controllers/getCharDetail.js");
const getCharById = require("../controllers/getCharById.js");

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split("/").at(-1);

    if(req.url.includes("onsearch")){
        getCharById(res, id)
    }
    if(req.url.includes("detail")){
        getCharById(res, id)
    }
    
}).listen(3001, "localhost")

module.exports = getCharById; */