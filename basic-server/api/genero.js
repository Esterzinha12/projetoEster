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
