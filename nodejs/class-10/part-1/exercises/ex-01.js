/**
 * 1 - Criar um módulo de redirecionamento para quando não encontrar a
 *  rota redirecionar para url/404
 */

'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.json({success: true, msg: 'Hello World'});
});

app.get('*', (req, res)=> {
    res.status(404).json({success: false, msg: 'Route not found'});
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
