const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CorretorSchema = mongoose.Schema({
    nome: String,
    sobrenome: String,
    creci: String,
    telefonePrincipal: String,
    telefoneSecundario: String,
    email: String,
    idImoveisCaptados: [ObjectId]
}, {
    timestamps: true
});
module.exports = mongoose.model('Corretor', CorretorSchema);