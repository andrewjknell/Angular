const mongoose = require('mongoose');
const Player = mongoose.model('Player');
const players = require('./../controllers/players.js');

module.exports = function (app) {
    app.get("/players", (req, res) => {
        players.index(req, res);
    })

    app.post("/player", (req, res) => {
        players.addplayer(req, res);
    })

    app.get('/player/:id', (req, res) => {
        players.details(req, res);
    })

    app.put('/player/:id', (req, res) => {
        players.editplayer(req, res);
    })

    app.delete('/player/:id', (req, res) => {
        players.deleteplayer(req, res);
    })

}