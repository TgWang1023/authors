const authors = require('../controllers/authors.js');

module.exports = function(app) {
    app.get('/authors', function(req, res) {
        authors.all(req, res);
    });
    app.get('/authors/:id', function(req, res) {
        authors.one(req, res);
    });
    app.post('/authors', function(req, res) {
        authors.create(req, res);
    });
    app.put('/authors/:id', function(req, res) {
        authors.update(req, res);
    });
    app.delete('/authors/:id', function(req, res) {
        authors.remove(req, res);
    });
}