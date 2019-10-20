const mongoose = require('mongoose');
const Data = mongoose.model('Data');
const Obj = mongoose.model('Obj');

module.exports = {
    index: function (req, res) {
        Data.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    showOne: function (req, res) {
        const { id } = req.params;
        Data.findById({ _id: id })
            .then(idFound => res.json(idFound))
            .catch(err => res.json(err));
    },
    add: function (req, res) {
        const { id } = req.params;
        const data = new Data(req.body);
        data.save()
            .then(pushData => {
                Obj.findOneAndUpdate({_id:id}, {$push: {data: pushData}})
                    .then(newData =>{ 
                        res.json(newData)})
                    .catch(err => res.json(err));
            })
            .catch(err => {
                res.json(err)});
    },
    edit: function (req, res) {
        const { id } = req.params;
        Data.findByIdAndUpdate(
            { _id: id },
            {
                info: req.body.info,
            },
            { new: true }
        )
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        const { id } = req.params;
        Data.findByIdAndDelete({ _id: id })
            .then(deleted => res.json(deleted))
            .catch(err => res.json(err));
    },
}