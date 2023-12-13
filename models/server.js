const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de la app
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Helmet
        this.app.use( helmet() );

        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor escuchando en puerto`, this.port);
        } );
    }
}
module.exports = Server;