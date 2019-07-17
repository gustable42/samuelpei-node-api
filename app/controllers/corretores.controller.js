const Corretor = require('../models/corretores.model.js');
const bcrypt = require('bcrypt'); 

// Create and Save a new Corretor
exports.create = (req, res) => {
    // Validate request
    if(!req.body.email)
        return res.status(400).send({message: "Email não pode estar vazio"});
    if(!req.body.password)
        return res.status(400).send({message: "Senha não pode estar vazio"});
    if(!req.body.nome)
        return res.status(400).send({message: "Nome não pode estar vazio"});
    if(!req.body.sobrenome)
        return res.status(400).send({message: "Sobrenome não pode estar vazio"});
    if(!req.body.creci)
        return res.status(400).send({message: "Creci não pode estar vazio"});
    if(!req.body.telefonePrincipal)
        return res.status(400).send({message: "Telefone principal não pode estar vazio"});
    if(!req.body.telefoneSecundario)
        return res.status(400).send({message: "Telefone secundário não pode estar vazio"});

    Corretor.find({email: req.body.email})
    .exec()
    .then(corretor => {
        if(corretor.length > 0) {
            return res.status(409).json({
                message: 'Email já existe'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    // Create a Corretor
                    const corretor = new Corretor({
                        email: req.body.email,
                        password: hash,
                        nome: req.body.nome, 
                        sobrenome: req.body.sobrenome,
                        creci: req.body.creci, 
                        telefonePrincipal: req.body.telefonePrincipal, 
                        telefoneSecundario: req.body.telefoneSecundario
                    });
                    // Save Corretor in the database
                    corretor.save()
                    .then(data => {
                        res.status(201).json({
                            message: "Corretor criado"
                        });
                    }).catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            });
        }
    })
};

// Retrieve and return all Corretores from the database.
exports.findAll = (req, res) => {
    Corretor.find()
    .then(corretores => {
        res.status(200).send(corretores);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao buscar por corretores."
        });
    });
};

// Find a single Corretor with a id
exports.findOne = (req, res) => {
    Corretor.findById(req.params.id)
    .then(corretor => {
        if(!corretor) {
            return res.status(404).send({
                message: "Corretor não encontado com id= " + req.params.id
            });            
        }
        res.status(200).send(corretor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Corretor não encontado com id= " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Corretor não encontado com id= " + req.params.id
        });
    });
};

// Update an corretor identified by the id in the request
exports.update = (req, res) => {
    // Find imovel and update it with the request body
    Corretor.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(corretor => {
        if(!corretor) {
            return res.status(404).send({
                message: "Corretor not found with id " + req.params.id
            });
        }
        res.status(200).send(corretor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Corretor not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating corretor with id " + req.params.id
        });
    });
};

// Delete an Corretor with the specified id in the request
exports.delete = (req, res) => {
    Corretor.findByIdAndRemove(req.params.id)
    .then(id => {
        if(!id) {
            return res.status(404).send({
                message: "Corretor not found with id " + req.params.id
            });
        }
        res.status(200).send({message: "Imovel deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Corretor not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete corretor with id " + req.params.id
        });
    });
};