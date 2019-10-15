const mongoose = require('mongoose')

const RatingSchema = new mongoose.Schema({
    rating: { type: String, required: true, minlength: 3 },
    stars: { type: Number, required: true }
}, { timestamps: true })

const CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true, minlength: 2 },
    image: { type: String },
    ratings: [RatingSchema]

}, { timestamps: true })


const Rating = mongoose.model('Rating', RatingSchema);
const Cake = mongoose.model('Cake', CakeSchema);