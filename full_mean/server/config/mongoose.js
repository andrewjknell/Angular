const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const models_path = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/full_mean', { useNewUrlParser: true });

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})
