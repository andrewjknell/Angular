const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    index: function (req, res) {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    showOne: function (req, res) {
        const { id } = req.params;
        Author.findById({ _id: id })
            .then(idFound => res.json(idFound))
            .catch(err => res.json(err));
    },
    add: function (req, res) {
        const author = new Author(req.body);
        author.save()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    edit: function (req, res) {
        const { id } = req.params;
        Author.findByIdAndUpdate(
            { _id: id },
            {
                name: req.body.name,
            },
            { new: true }
        )
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        const { id } = req.params;
        Author.findByIdAndDelete({ _id: id })
            .then(deleted => res.json(deleted))
            .catch(err => res.json(err));
    },
}