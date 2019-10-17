const data = require('./../controllers/data.js');
const obj = require('./../controllers/obj.js');

module.exports = function (app) {
    app.route('/data')
        .get(data.index)


    app.route('/data/:id')
        .post(data.add)
        .get(data.showOne)
        .put(data.edit)
        .delete(data.delete);

    app.route('/obj')
        .get(obj.index)
        .post(obj.add);

    app.route('/obj/:id')
        .get(obj.showOne)
        .put(obj.edit)
        .delete(obj.delete);

}