const oracledb = require('oracledb');

class Conexao {
    constructor() {
        this.usuario = "system",
            this.senha = "123456",
            this.url = "localhost/XE"
    }

    novaPostagem(req, res) {
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
        };
    };

    query(sql, myFuction) {
        oracledb.getConnection(
            {
                user: this.usuario,
                password: this.senha,
                connectString: this.url
            },
            function (err, connection) {
                if (err) { console.error(err); return; }
                connection.execute(sql, (err, result) => {
                    if (err) {
                        console.error(err); return 'err';
                    }
                    myFuction(result);
                    doRelease(connection);
                })
            }
        );

        function doRelease(connection) {
            connection.close(function (erro) {
                console.error('Conexão encerrada!!');
            });
        };
    };
}

module.exports = Conexao;