const mongoose = require('mongoose');
const Obj = mongoose.model('Obj');

module.exports = {
    index: function (req, res) {
        Obj.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    showOne: function (req, res) {
        const { id } = req.params;
        Obj.findById({ _id: id })
            .then(idFound => res.json(idFound))
            .catch(err => res.json(err));
    },
    add: function (req, res) {
        const obj = new Obj(req.body);
        obj.save()
            .then(data => res.json({ message: 'win', data: data }))
            .catch(err => res.json({ message: 'lose', err: err }));
    },
    edit: function (req, res) {
        const { id } = req.params;
        console.log('hererererere')
        Obj.findOneAndUpdate(
            { _id: id },
            {
                name: req.body.name,
                qty: req.body.qty,
                price: req.body.price
            }, {runValidators: true}
        )
            .then(data => res.json({ message: 'win', data: data }))
            .catch(err => {
                console.log(err)
                res.json({ message: 'lose', err: err })});
    },
    addData: function (req, res) {
        const { id } = req.params;
        Obj.findByIdAndUpdate({ _id: id }, { $push: { data: req.body } })
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },
    delete: function (req, res) {
        const { id } = req.params;
        Obj.findByIdAndDelete({ _id: id })
            .then(deleted => res.json(deleted))
            .catch(err => res.json(err));
    },
}