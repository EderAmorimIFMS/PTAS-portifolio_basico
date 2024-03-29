const express = require('express')
const path = require('path');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/formacao-academica', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/formacao-academica.html'));
})

app.get('/projetos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/projetos.html'));
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})