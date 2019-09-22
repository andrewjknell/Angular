const authors = require('./../controllers/authors.js');

module.exports = function (app) {
    app.route('/author')
        .get(authors.index)
        .post(authors.add);

    app.route('/author/:id')
        .get(authors.showOne)
        .put(authors.edit)
        .delete(authors.delete);
}