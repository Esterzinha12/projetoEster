inserirRota('/cadasgenero', function (dados, resposta) {
    console.log(dados);
    database(`INSERT INTO GENERO(
         GENERO) VALUES
       ( "${dados.genero}")`)
       .then(result => {
           console.log('result', result);
           resposta({ user: result});
       }).catch(erro => {
           console.log(erro);
           resposta({ erro: 'Erro ao inserir genero!' });
       });
});

inserirRota('/select_genero', (dados, resposta) => {
    console.log(dados);
    database(`SELECT * FROM GENERO `).then(result => {
        resposta(result);
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});


inserirRota('/excluir_genero', function (dados, resposta) {
    console.log(dados);
    database(`ALTER TABLE GENERO DROP WHERE CODIGO=${dados.codigo}`)
        .then(result => {
            alert('Genero deletado com sucesso!');
            resposta({ list: result });
        }).catch(erro => {
            console.log('Erro ao deletar o genero!');
            alert({ erro: 'Erro ao deletar o genero' });
        });
});