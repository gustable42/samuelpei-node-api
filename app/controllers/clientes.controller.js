const Cliente = require('../models/Clientes.model.js');

// Create and Save a new Cliente
exports.create = (req, res) => {
    // Validate request
    if(!req.body.nome)
        return res.status(400).send({message: "Nome não pode estar vazio"});
    if(!req.body.sobrenome)
        return res.status(400).send({message: "Sobrenome não pode estar vazio"});
    if(!req.body.telefone)
        return res.status(400).send({message: "Telefone não pode estar vazio"});
    if(!req.body.email)
        return res.status(400).send({message: "Email não pode estar vazio"});

    // Create a Cliente
    const cliente = new Cliente({
        nome: req.body.nome, 
        sobrenome: req.body.sobrenome,
        creci: req.body.creci, 
        telefonePrincipal: req.body.telefonePrincipal, 
        telefoneSecundario: req.body.telefoneSecundario, 
        email: req.body.email
    });

    // Save Cliente in the database
    cliente.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao salvar o novo Cliente."
        });
    });
};

// Retrieve and return all Clientes from the database.
exports.findAll = (req, res) => {
    Cliente.find()
    .then(clientes => {
        res.status(200).send(clientes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao buscar por Clientes."
        });
    });
};

// Find a single Cliente with a id
exports.findOne = (req, res) => {
    Cliente.findById(req.params.id)
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Cliente não encontado com id= " + req.params.id
            });            
        }
        res.status(200).send(cliente);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cliente não encontado com id= " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Cliente não encontado com id= " + req.params.id
        });
    });
};

// Update an Cliente identified by the id in the request
exports.update = (req, res) => {
    // Find imovel and update it with the request body
    Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(cliente => {
        if(!cliente) {
            return res.status(404).send({
                message: "Cliente not found with id " + req.params.id
            });
        }
        res.status(200).send(cliente);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cliente not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating Cliente with id " + req.params.id
        });
    });
};

// Delete an Cliente with the specified id in the request
exports.delete = (req, res) => {
    Cliente.findByIdAndRemove(req.params.id)
    .then(id => {
        if(!id) {
            return res.status(404).send({
                message: "Cliente not found with id " + req.params.id
            });
        }
        res.status(200).send({message: "Imovel deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Cliente not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Cliente with id " + req.params.id
        });
    });
};