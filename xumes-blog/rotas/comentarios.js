const express = require('express');
const router = express.Router();
const Conexao = require('../services/conexao');
const conexao = new Conexao();
const oracledb = require('oracledb');

router.get('/comentarios', (req, res) => {
    conexao.query('select * from comentarios', (result) => {
        res.send(result.rows);
        console.log(result.rows);
    });
});

router.get('/comentarios/novo', (req, res) => {
    console.log('passou em: /comentarios/novo');
        
    oracledb.getConnection(
        {user: 'system', password: '123456', connectString: 'localhost/XE'},
        function (err, connection) {
            if (err) { console.error(err); return; }
            var conteudo = req.query.conteudo;
            var autor = req.query.autor;
            connection.execute('insert into comentarios values (:CONTEUDO, :AUTOR)',
                {conteudo: conteudo, autor: autor},
                {autoCommit:true},
                (err, result) => {
                    if (err) {
                        console.error(err); return 'err';
                    } else {
                        //myFuction(result);
                        console.log("Comentário inserido  " + result.rowsAffected);
                        res.send('Comentário inserido ' + result.rowsAffected);
                        doRelease(connection);
                    }

                })
        }
    );

    function doRelease(connection) {
        connection.close(function (erro) {
            console.error('Conexão encerrada!!');
        });
    };
    
});


module.exports = router;