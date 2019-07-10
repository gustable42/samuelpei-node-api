const Imovel = require('../models/imoveis.model.js');

// Create and Save a new Imovel
exports.create = (req, res) => {
    // Validate request
    if(!req.body.titulo)
        return res.status(400).send({message: "Título não pode estar vazio"});
    if(!req.body.idProprietario)
        return res.status(400).send({message: "idProprietario não pode estar vazio"});
    if(!req.body.condominio)
        return res.status(400).send({message: "condominio não pode estar vazio"});
    if(!req.body.conjunto)
        return res.status(400).send({message: "conjunto não pode estar vazio"});
    if(!req.body.numero)
        return res.status(400).send({message: "numero não pode estar vazio"});
    if(!req.body.numQuartos)
        return res.status(400).send({message: "numQuartos não pode estar vazio"});
    if(!req.body.numBanheiros)
        return res.status(400).send({message: "numBanheiros não pode estar vazio"});
    if(!req.body.condominioFechado)
        return res.status(400).send({message: "condominioFechado não pode estar vazio"});
    if(!req.body.portaoEletronico)
        return res.status(400).send({message: "portaoEletronico não pode estar vazio"});
    if(!req.body.interfone)
        return res.status(400).send({message: "interfone não pode estar vazio"});
    if(!req.body.piscina)
        return res.status(400).send({message: "piscina não pode estar vazio"});
    if(!req.body.areaDeLazer)
        return res.status(400).send({message: "areaDeLazer não pode estar vazio"});
    if(!req.body.dce)
        return res.status(400).send({message: "dce não pode estar vazio"});

    // Create a Note
    const imovel = new Imovel({
        titulo: req.body.titulo, 
        idProprietario: req.body.idProprietario,
        condominio: req.body.condominio, 
        conjunto: req.body.conjunto, 
        numero: req.body.numero, 
        numQuartos: req.body.numQuartos, 
        numBanheiros: req.body.numBanheiros, 
        condominioFechado: req.body.condominioFechado, 
        portaoEletronico: req.body.portaoEletronico, 
        interfone: req.body.interfone, 
        piscina: req.body.piscina, 
        areaDeLazer: req.body.areaDeLazer, 
        dce: req.body.dce
    });

    // Save Note in the database
    imovel.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao salvar o novo imóvel."
        });
    });
};

// Retrieve and return all Imoveis from the database.
exports.findAll = (req, res) => {
    Imovel.find()
    .then(imoveis => {
        res.send(imoveis);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao buscar por imóveis."
        });
    });
};

// Find a single Imovel with a id
exports.findOne = (req, res) => {
    Imovel.findById(req.params.id)
    .then(imovel => {
        if(!imovel) {
            return res.status(404).send({
                message: "Imóvel não encontado com id=" + req.params.id
            });            
        }
        res.send(imovel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Imóvel não encontado com id=" + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Imóvel não encontado com id=" + req.params.id
        });
    });
};

// Update an Imovel identified by the id in the request
exports.update = (req, res) => {


    // Find imovel and update it with the request body
    Imovel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(imovel => {
        if(!imovel) {
            return res.status(404).send({
                message: "Imovel not found with id " + req.params.id
            });
        }
        res.send(imovel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Imovel not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating imovel with id " + req.params.id
        });
    });
};

// Delete an Imovel with the specified id in the request
exports.delete = (req, res) => {
    Imovel.findByIdAndRemove(req.params.id)
    .then(id => {
        if(!id) {
            return res.status(404).send({
                message: "Imovel not found with id " + req.params.id
            });
        }
        res.send({message: "Imovel deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
};