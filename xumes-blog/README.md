###### OBSERVAÇÕES DO NODE (BACKTEND) #######
1 - INSTALAR O PACOTE express
        `npm install express --save`

2 - INSTALAR O PACOTE body-parser
        `npm install body-parser --save`

3 - INSTALAR O CLIENT ORACLE (Oracle Instant Client - compatível com a sua versão do oracle)
4 - INSTALAR OS MODULOS NECESSÁRIOS PARA CONECTAR NO ORACLE
        `npm install oracledb --save`
        `npm install sequelize-oracle --save`
        Observação: Verificar como funciona o pacote simple-oracledb. É um concorrente do oracledb


###### OBSERVAÇÕES DO REACT (FRONTEND) #######
1 - ADICIONAR O PACOTE create-react-app
    `npm install create-react-app`

2 - CRIAR UM PROJETO REACT
    `create-react-app <nome-projeto>`

3 - INICIAR O PROJETO CRIADO COM O YARN
    para instalar o yarn deve-se fazer o download em https://yarnpkg.com/pt-BR/ depois executar o instalador
    talvez seja necessário reiniciar a máquina após a instalação do yarn.
    Para executar o projeto, deve-se executar o seguinte comando de dentro da pasta rais.
        `yarn start`

4 - PARA FAZER REQUISIÇÕES HTTP DE DENTRO DE UM PROJETO REACT É NECESSÁRIO ADICIONAR O AXIOS
    `yarn add axios`