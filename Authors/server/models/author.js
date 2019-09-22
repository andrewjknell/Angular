const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "must have a name"], minlength: [2 , "must be longer than 3 characters"]},

})

const Author = mongoose.model('Author', AuthorSchema)