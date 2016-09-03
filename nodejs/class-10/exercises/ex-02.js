/**
 * Criar um módulo onde seja passado um retorno - String ou Buffer -
 *  e caso seja String, defina o cabeçalho correta MANUALMENTE
 *  usando res.send.
 */

'use strict';

const express = require('express');
const Content = require('./content');
const app = express();

app.get('/', (req, res)=> {
    return Content(req, res);
});

app.listen(3000, ()=> {
    console.log('Serve running at port 3000');
});
