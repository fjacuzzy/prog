var mongoose = require('mongoose'),

    Schema = mongoose.Schema;



var cartaSchema = new Schema({

id:{ type: String },

nombre:{ type: String },

tipoCarta:{ type: String },

ataque:{ type: String },

defensa: { type: String },
    
atributo: { type: String },
    
nivel: { type: String },
    
descripcion: { type: String },
    
imagen: { type: String },

//comentarios: { type: Array },

});





module.exports = mongoose.model('Carta', cartaSchema,'cartasdb');