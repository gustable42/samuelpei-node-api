module.exports = (app) => {
    const imoveis = require('../controllers/imoveis.controller.js');
    const corretores = require('../controllers/corretores.controller.js');
    const clientes = require('../controllers/clientes.controller.js');

    // Imoveis
    app.post('/imoveis', imoveis.create);
    app.get('/imoveis', imoveis.findAll);
    app.get('/imoveis/:id', imoveis.findOne);
    app.put('/imoveis/:id', imoveis.update);
    app.delete('/imoveis/:id', imoveis.delete);

     // Corretores
     app.post('/corretores', corretores.create);
     app.get('/corretores', corretores.findAll);
     app.get('/corretores/:id', corretores.findOne);
     app.put('/corretores/:id', corretores.update);
     app.delete('/corretores/:id', corretores.delete);

     // Clientes
     app.post('/clientes', clientes.create);
     app.get('/clientes', clientes.findAll);
     app.get('/clientes/:id', clientes.findOne);
     app.put('/clientes/:id', clientes.update);
     app.delete('/clientes/:id', clientes.delete);
}