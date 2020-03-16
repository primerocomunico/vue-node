// npm install -D @babel/core @babel/cli @babel/preset-env @babel/node

// Ejecutar express / npm init --yes / npm install express --save
const express = require('express');
// Morgan nos ayuda a viusalizar las peticiones en consola / npm install morgan --save
const morgan = require('morgan');
// CORS / npm install cors --save
const cors = require('cors');
// Acceder a directorios y rutas dinámicas / Ya viene en express
const path = require('path');

const app = express();

// MIDDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
// app.get('/', function(req, res) {
  //  res.send('Hello world');
// });

// Middleware para Vue.js router modo history
// npm install --save connect-history-api-fallback
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar servidor / npm install -g nodemon
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function() {
    console.log('Escuchando el puerto: ', app.get('port'))
})