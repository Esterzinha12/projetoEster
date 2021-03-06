inserirRota('/select_adm', function (dados, resposta) {
    console.log(dados);

    database(`SELECT * FROM LOGINADM`)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ list: result });
        }).catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ erro: 'Erro ao buscar o usuario!' });
        });
});

inserirRota('/criar_adm', function (dados, resposta) {
    console.log(dados);

    if (!dados.usuario) {
        return resposta({ erro: 'É necessario preencher o usuaario' });
    }

    if (!dados.senha) {
        return resposta({ erro: 'É necessario preencher a senha' });
    }

    database(`INSERT INTO LOGINADM(
        USUARIO, SENHA) VALUES
        ("${dados.usuario}", "${dados.senha}")`)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ message: 'Usuario inserido com sucesso!' });
        }).catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ message: 'Erro ao inserir o usuario!' });
        });
});



inserirRota('/excluir_adm', function (dados, resposta) {
    console.log(dados);

    database(`ALTER TABLE LOGINADM DROP WHERE ID=1 `)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ list: result });
        }).catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ erro: 'Erro ao buscar o usuario!' });
        });
});

inserirRota('/select_login', function (dados, resposta) {
    console.log(dados);

    database(`SELECT * FROM LOGINADM WHERE USUARIO = "${dados.usuario}" AND SENHA= "${dados.senha}" LIMIT 1`)
        .then(result => {
            console.log('result', result);
            resposta({ user: result[0]});
        }).catch(erro => {
            console.log(erro);
            resposta({ erro: 'Erro ao buscar o usuario!' });

        });
});




