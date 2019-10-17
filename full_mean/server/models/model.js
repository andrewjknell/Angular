const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    info: {
        type: String
    }
})
const ObjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must have a name'], 
        minlength: [2, 'must be longer than 2 characters']
    },
    about:  {
        type: String, 
        required: [true, 'must have something else'], 
        minlength: [2, 'must be longer than 2 characters']
    },
},{timestamps})

const Object = mongoose.model('object')