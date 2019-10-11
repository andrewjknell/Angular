const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({

    name: {type: String},
    gold: {type: Number}

},{ timestamps: true })

const Player = mongoose.model('Player', PlayerSchema);