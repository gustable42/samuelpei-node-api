const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ClienteSchema = mongoose.Schema({
    nome: String,
    sobrenome: String,
    telefone: String,
    email: String,
    idImoveisInteressado: [ObjectId]
}, {
    timestamps: true
});
module.exports = mongoose.model('Cliente', ClienteSchema);