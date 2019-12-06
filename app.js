const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'David Gallardo',
            edad: 49,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Gol');
        res.end();
    })
    .listen(8080);


console.log('Escuchando el puerto 8080');