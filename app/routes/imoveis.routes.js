module.exports = (app) => {
    const imoveis = require('../controllers/imoveis.controller.js');

    // Imoveis
    app.post('/imoveis', imoveis.create);
    app.get('/imoveis', imoveis.findAll);
    app.get('/imoveis/:id', imoveis.findOne);
    app.put('/imoveis/:id', imoveis.update);
    app.delete('/imoveis/:id', imoveis.delete);
}