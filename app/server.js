var http = require('http');
const express = require('express');
const app = express();

const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('/app', (req, res) => res.sendfile('index.html' , { root : baseDir } ))


const port = 21009; // Change port
app.listen(port)

/*
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';

const app = express();
const port = 21025; // Define a porta do servidor

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define o diretório onde os arquivos estáticos serão servidos
const staticFilesPath = path.join(__dirname, '/front-end/dist');

// Configura o Express para servir os arquivos estáticos
app.use(express.static(staticFilesPath));

// Rota para servir o arquivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

// Inicia o servidor
app.listen(port);
*/
