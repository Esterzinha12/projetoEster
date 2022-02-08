inserirRota('/buscar_usuario', function (dados, resposta) {
    console.log(dados);

    database(`SELECT*FROM USER`)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ list: result });
        }).catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ erro: 'Erro ao buscar o usuario!' });
        });
});

inserirRota('/criar_usuario', function (dados, resposta) {
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'É necessario preencher o nome' });
    }

    if (!dados.sobrenome) {
        return resposta({ erro: 'É necessario preencher o sobrenome' });
    }

    database(`INSERT INTO USER(
        NOME, SOBRENOME) VALUES
        ("${dados.nome}", "${dados.sobrenome}")`)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ message: 'Usuario inserido com sucesso!' });
        }).catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ message: 'Erro ao inserir o usuario!' });
        });
});

inserirRota('/excluir_usuario', function (dados, resposta) {
    console.log(dados);

    database(`ALTER TABLE USER DROP WHERE ID=1 `)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ list: result });
        }).catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ erro: 'Erro ao buscar o usuario!' });
        });
});

inserirRota('/login', function (dados, resposta) {
    console.log(dados);

    database(`SELECT*FROM USER WHERE SOBRENOME = "${dados.sobrenome}" AND PASSWORD= "${dados.password}" LIMIT 1`)
        .then(result => {
            console.log('result', result);
            resposta({ user: result[0]});
        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar o usuario!' });
        });
});


