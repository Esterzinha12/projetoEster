inserirRota('/cadaseditora', function (dados, resposta) {
    console.log(dados);
    database(`INSERT INTO EDITORA(
         EDITORA) VALUES
       ( "${dados.editora}")`)
       .then(result => {
           console.log('result', result);
           resposta({ user: result});
       }).catch(erro => {
           console.log(erro);
           resposta({ erro: 'Erro ao inserir editora!' });
       });
});

inserirRota('/select_editora', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM EDITORA ').then(result => {
        resposta(result );
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/excluir_editora', function (dados, resposta) {
    console.log(dados);
    database(`DELETE FROM EDITORA WHERE CODIGO = "${dados.CODIGO}"`)
        .then(result => {
            alert('Editora deletado com sucesso!');
            resposta({ list: result });
        }).catch(erro => {
            console.log('Erro ao deletar o editora!');
            alert({ erro: 'Erro ao deletar o editora!' });
        });
});