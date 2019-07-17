const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ImovelSchema = mongoose.Schema({
    titulo: String,
    idProprietario: String,

    condominio: String,
    conjunto: String,
    numero: String,

    numQuartos: Number,
    numBanheiros: Number,

    condominioFechado: Boolean,
    portaoEletronico: Boolean,
    interfone: Boolean,
    piscina: Boolean,
    areaDeLazer: Boolean,
    dce: Boolean,

    idCaptadores: [ObjectId]
}, {
    timestamps: true
});
module.exports = mongoose.model('Imovel', ImovelSchema);