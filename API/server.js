const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express();


//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname + '/client/views'));
app.use(express.static( __dirname + '/public/dist/public' ));

app.use(express.json());

//require('./server/config/mongoose.js');
//require('./server/config/routes.js')(app);
app.listen(8000, () => console.log('listening on port 8000'));