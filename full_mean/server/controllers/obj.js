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
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    edit: function (req, res) {
        const { id } = req.params;
        Obj.findByIdAndUpdate(
            { _id: id },
            {
                name: req.body.name,
                about: req.body.about,
            },
            { new: true }
        )
            .then(results => res.json(results))
            .catch(err => res.json(err));
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