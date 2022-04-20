const express = require('express');
const port = 8080;

app.set('view engine', 'hbs');

const app = express(); // app es una instancia de express , donde get será un method

//servir contenido estatico
app.use(express.static('public/back'));

//app.get('/', function (req, res) {
//cuando llegue unapeticion get al back, le respondere con ese info. "hola mundo"
//res.send('Hello World');
//});

app.get('/holamundo', function (req, res) {
  //cuando llegue unapeticion get al back, le respondere con ese info. "hola mundo"
  res.send('Hello World from express');
});

app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/webpage/generic.html');
});
app.get('/elements', function (req, res) {
  res.sendFile(__dirname + '/public/webpage/elements.html');
});
app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/public/webpage/index.html');
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
}); //* es para todos los demas, maneja todo lo que no se maneja en los anteriores

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
}); //cuando se ejecute el server, se ejecutara esta funcion
