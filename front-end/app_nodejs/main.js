var http = require('http');
const express = require('express');
const app = express();
const port = porta_da_aplicação;
app.listen(port)

const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('/', (req, res) => res.sendfile('index.html' , { root : baseDir } ))
