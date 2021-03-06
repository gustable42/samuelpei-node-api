module.exports = (app) => {
    const clientes = require('../controllers/clientes.controller.js');

     // Clientes
     app.post('/clientes', clientes.create);
     app.get('/clientes', clientes.findAll);
     app.get('/clientes/:id', clientes.findOne);
     app.put('/clientes/:id', clientes.update);
     app.delete('/clientes/:id', clientes.delete);
}