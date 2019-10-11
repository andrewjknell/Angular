const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
    index: function (req, res) {
        Player.find()
            .then(player => res.json(player))
            .catch(err => res.json(err));
    },
    details: function (req, res) {
        const { id } = req.params;
        Player.findById({ _id: id })
            .then(idFound => res.json(idFound))
            .catch(err => res.json(err));
    },
    addplayer: function (req, res) {
        const player = new Player(req.body);
        player.save()
            .then(playerData => res.json(playerData))
            .catch(err => res.json(err));
    },
    editplayer: function (req, res) {
        const { id } = req.params;
        Player.findByIdAndUpdate({ _id: id }, {
            name: "",
            gold: 0
        },{new:true})
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    deleteplayer: function (req, res) {
        const { id } = req.params;
        Player.findByIdAndDelete({ _id: id })
            .then(deletedName => res.json(deletedName))
            .catch(err => res.json(err));
    },
}