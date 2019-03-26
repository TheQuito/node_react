const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
const Conexao = require('../services/conexao');
const conexao = new Conexao();


router.get('/postagens', (req, res) => {
    conexao.query('select * from postagens', (result) => {
        res.send(result.rows);
        console.log(result.rows);
    });
});


router.get('/postagens/nova', (req, res) => {
    conexao.novaPostagem(req, res);
    /*
    oracledb.getConnection(
        {user: 'system', password: '123456', connectString: 'localhost/XE'},
        function (err, connection) {
            if (err) { console.error(err); return; }
            var titulo = req.query.titulo;
            var conteudo = req.query.conteudo;
            var autor = req.query.autor;
            connection.execute('insert into postagens values (:TITULO, :CONTEUDO, :AUTOR)',
                {titulo: titulo, conteudo: conteudo, autor: autor},
                {autoCommit:true},
                (err, result) => {
                    if (err) {
                        console.error(err); return 'err';
                    } else {
                        //myFuction(result);
                        console.log("inserido " + result.rowsAffected);
                        res.send('Postagem inserida ' + result.rowsAffected);
                        doRelease(connection);
                    }

                })
        }
    );

    function doRelease(connection) {
        connection.close(function (erro) {
            console.error('Conexão encerrada!!');
        });
    };*/
});


module.exports = router;