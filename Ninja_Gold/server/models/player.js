const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    
    name: {type: String, required:true},
    gold: {type: Number}
    
},{ timestamps: true })
console.log('here');
const Player = mongoose.model('Player', PlayerSchema);
