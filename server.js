const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

const app = express();

// Indica que debe cargar del server public y carga el index.html
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'david angel gallardo',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.get('/datos', (req, res) => {
    let salida = {
        nombre: 'David Gallardo',
        edad: 49,
        url: req.url
    }
    res.send(salida);
});


app.get('/saludos', (req, res) => {
    res.send('Hola');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});