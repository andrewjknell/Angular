const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
    index: function (req, res) {
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    showOne: function (req, res) {
        const { id } = req.params;
        Cake.findById({ _id: id })
            .then(idFound => res.json(idFound))
            .catch(err => res.json(err));
    },
    add: function (req, res) {
        console.log("here")
        const cake = new Cake(req.body);
        cake.save()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    edit: function (req, res) {
        const { id } = req.params;
        Task.findByIdAndUpdate({ _id: id }, {
            baker: req.body.title,
            image: req.body.desc
        },{new:true})
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        const { id } = req.params;
        Cake.findByIdAndDelete({ _id: id })
            .then(deleted => res.json(deleted))
            .catch(err => res.json(err));
    },
}