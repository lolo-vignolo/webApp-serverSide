require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    title: 'serverSide',
    home: 'welcome to my ServerSide website',
    name: 'Lorenzo 😄',
  });
});
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
