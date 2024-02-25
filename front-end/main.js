import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';

const app = express();
const port = 21025; // Define a porta do servidor

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define o diretório onde os arquivos estáticos serão servidos
const staticFilesPath = path.join(__dirname, 'dist');

// Configura o Express para servir os arquivos estáticos
app.use(express.static(staticFilesPath));

// Rota para servir o arquivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

// Inicia o servidor
app.listen(port);
