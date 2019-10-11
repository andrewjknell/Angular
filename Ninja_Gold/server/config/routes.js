const mongoose = require('mongoose');
const Player = mongoose.model('Player');
const players = require('./../controllers/players.js');

module.exports = function (app) {
    app.get("/", (req, res) => {
        players.index(req, res);
    })

    app.post("/", (req, res) => {
        players.addplayer(req, res);
    })

    app.get('/:id', (req, res) => {
        players.details(req, res);
    })

    app.put('/:id', (req, res) => {
        players.editplayer(req, res);
    })

    app.delete('/:id', (req, res) => {
        players.deleteplayer(req, res);
    })

}