const mongoose = require('mongoose');
// const Cake = mongoose.model('Cake');
// const Rating = mongoose.model('Rating');
const cakes = require('./../controllers/cakes.js');
const cakes = require('./../controllers/ratings.js');
module.exports = function(app){
app.get("/cake", (req, res) => {
    cakes.index(req, res);
})

app.get('/cake/:id', (req, res) => {
    cakes.showOne(req, res);
})

app.post("/cake", (req, res) => {
    cakes.add(req, res);
})

app.put('/cake/:id', (req, res) => {
    cakes.edit(req, res);
})

app.delete('/cake/:id', (req, res) => {
    cakes.delet(req, res);
})


app.get("/rating", (req, res) => {
    ratings.index(req, res);
})

app.get('/rating/:id', (req, res) => {
    ratings.showOne(req, res);
})

app.post("/rating/", (req, res) => {
    ratings.add(req, res);
})

app.put('/rating/:id', (req, res) => {
    ratings.edit(req, res);
})

app.delete('/rating/:id', (req, res) => {
    ratings.delet(req, res);
})

}