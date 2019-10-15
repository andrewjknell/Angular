const cakes = require('./../controllers/cakes.js');
const ratings = require('./../controllers/ratings.js');
module.exports = function (app) {
    app.route('/cake')
        .get(cakes.index)
        .post(cakes.add);

    app.route('/cake/:id')
        .get(cakes.showOne)
        .put(cakes.edit)
        .delete(cakes.delete);

    app.route('/rating')
        .get(ratings.index)
        .post(ratings.add);

    app.route('/rating/:id')
        .get(ratings.showOne)
        .put(ratings.edit)
        .delete(ratings.delete);

}