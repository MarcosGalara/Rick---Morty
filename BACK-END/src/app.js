






/* const http = require("http");
const characters = require("./utils/data.js")

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("rickandmorty/character")){
        let id = req.url.split("/").at(-1);//de mi objeto request solo quiero ver la propiedad url y separarlo en elementos a partir de su "/". Una vez separados solo necesito el ultimo elemento que es el id y lo saco con el metodo at
        //let characterFilter = character.filter(char => char.id === Number(id))
        let characterFilter = characters.find(char => char.id === Number(id))
        res
        .writeHead(200, {"Content-type" : "application/json"})
        .end(JSON.stringify(characterFilter))
    }

}).listen(3001, "localhost") */

