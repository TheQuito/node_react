const express = require('express');
const bodyParser = require('body-parser');
const Conexao = require('./services/conexao');
const conexao = new Conexao();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))




app.get("/", (req, res) => {
    conexao.query('select * from postagens', (result) => {
        res.send(result.rows);
    });
    //res.send('Está funcionando!');
})

const rotas = require('./rotas');
app.use('/api', rotas);

// disponibiliza a pasta client para o servidor
app.use(express.static('../client'));


const port = 3001;

app.listen(port, () => {
    console.log('servidor rodando em localhost:', port);
})