module.exports = (app) => {
    const corretores = require('../controllers/corretores.controller.js');

     // Corretores
     app.post('/corretores/signup', corretores.signup);
     app.post('/corretores/login', corretores.login);
     app.get('/corretores', corretores.findAll);
     app.get('/corretores/:id', corretores.findOne);
     app.put('/corretores/:id', corretores.update);
     app.delete('/corretores/:id', corretores.delete);
}