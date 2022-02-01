inserirRota('/buscar_usuario', function(dados, resposta){
    console.log(dados);

    resposta({ok:"Requisição efetuada com sucesso!"});
});

inserirRota('/criar_usuario', function(dados, resposta){
    console.log(dados);

    if(!dados.nome){
        return resposta({erro: 'É necessario preencher o nome'});
    }

    if(!dados.sobrenome){
        return resposta({erro: 'É necessario preencher o sobrenome'});
    }

    database(`INSERT INTO USER(
        NOME, SOBRENOME) VALUES
        ("${dados.nome}", "${dados.sobrenome}")`)
        .then(result=>{
            console.log('Usuario inserido com sucesso!');
            resposta({message: 'Usuario inserido com sucesso!'});
        }).catch(erro=>{
            console.log('Erro ao inserir o usuario!');
            resposta({message: 'Erro ao inserir o usuario!'});
        });
});