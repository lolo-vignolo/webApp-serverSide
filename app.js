require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//asi creo la ruta para luego utilizar los parciales en cada screen

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

// pongo rutas parciales por que al poner render va directamente al views, handelbars está creado así

app.get('/', function (req, res) {
  res.render('home', {
    title: 'serverSide',
    home: 'welcome to my ServerSide website',
    name: 'Lorenzo 😄',
  });
});

//asi creo argumentos para pasar
app.get('/elements', function (req, res) {
  res.render('elements', {
    title: 'serverSide',
    home: 'welcome to my ServerSide website',
    name: 'Lorenzo 😄',
  });
});
app.get('/generic', function (req, res) {
  res.render('generic', {
    title: 'serverSide',
    home: 'welcome to my ServerSide website',
    name: 'Lorenzo 😄',
  });
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
