const crudCartas = (app) => {



const Carta = require('../models/cartas.js');



//FUNCIONES DE ENDPOINTS

//GET - Devuelve todas las peliculas en la base

findAllCartas = (req, res) => {

Carta.find((err, cartas) => {

if(!err){

console.log('GET /cartas ')

res.send(cartas);

}else{

console.log('ERROR: ' + err);

}

});

};



//POST - Insert a new TVShow in the DB

addCarta = function(req, res) {

console.log('POST');

console.log(req.body);
    

var carta = new Carta({

id: req.body.id,

nombre: req.body.nombre,

tipoCarta: req.body.tipoCarta,

ataque: req.body.ataque,

defensa: req.body.defensa,

atributo: req.body.atributo,

nivel: req.body.nivel,

descripcion: req.body.descripcion,

imagen: req.body.imagen,

});



carta.save(function(err) {

if(!err) {

console.log('Created');

} else {

console.log('ERROR: ' + err);

}

});



res.send(carta);

};



//Rutas de la API, asociadas a una función

app.get('/cartas', findAllCartas);

app.post('/cartas', addCarta);

}



module.exports = crudCartas;