const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    info: {
        type: String,
        required: true,
        minlength: [2, 'must have info']
    }
}, { timestamps: true })

const ObjSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must have a name'],
        minlength: [2, 'must be longer than 2 characters']
    },
    about: {
        type: String,
        required: [true, 'must have something else'],
        minlength: [2, 'must be longer than 2 characters']
    },
    data: [DataSchema],
}, { timestamps: true })

const Data = mongoose.model('Data', DataSchema)
const Obj = mongoose.model('Obj', ObjSchema)