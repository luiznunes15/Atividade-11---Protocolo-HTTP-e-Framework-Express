const express = require('express');
const index = require('./paginas/index');
const formularioCadastro = require('./paginas/formularioCadastro.js');
const login = require('./paginas/login');
const validaLogin = require('./paginas/validaLogin');
const validaCadastro = require('./paginas/validaCadastro');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', index);
app.get('/cadastro', formularioCadastro);
app.post('/cadastro', validaCadastro);
app.get('/login', login);
app.post('/login', validaLogin);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
  console.log(`Acesse http://localhost:${port} para testar.`);
});
