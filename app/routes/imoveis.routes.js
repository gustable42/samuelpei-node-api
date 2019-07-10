module.exports = (app) => {
    const imoveis = require('../controllers/imoveis.controller.js');

    // Create a new imoveis
    app.post('/imoveis', imoveis.create);

    // Retrieve all imoveis
    app.get('/imoveis', imoveis.findAll);

    // Retrieve a single imoveis with id
    app.get('/imoveis/:id', imoveis.findOne);

    // Update a imoveis with id
    app.put('/imoveis/:id', imoveis.update);

    // Delete a imoveis with id
    app.delete('/imoveis/:id', imoveis.delete);
}