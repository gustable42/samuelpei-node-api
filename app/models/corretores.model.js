const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CorretorSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},

    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    creci: {type: String, required: true},
    telefonePrincipal: {type: String, required: true},
    telefoneSecundario: {type: String, required: true},
    idImoveisCaptados: [ObjectId]
}, {
    timestamps: true
});
module.exports = mongoose.model('Corretor', CorretorSchema);