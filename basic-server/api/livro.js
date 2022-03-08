inserirRota('/cadastrar', function (dados, resposta) {
    console.log(dados);

    if (!dados.titulo) {
        return alert({ erro: 'É necessario preencher o titulo' });
    }
    if (!dados.autor) {
        return alert({ erro: 'É necessario preencher o autor' });
    }
    if (!dados.valor) {
        return alert({ erro: 'É necessario preencher o valor' });
    }
    if (!dados.genero) {
        return alert({ erro: 'É necessario preencher o genero' });
    }
    if (!dados.editora) {
        return alert({ erro: 'É necessario preencher a editora' });
    }
    if (!dados.estoque) {
        return alert({ erro: 'É necessario preencher o estoque' });
    }

    database(`INSERT INTO CADASTRARLIVRO(
        TITULO, AUTOR, VALOR, GENERO, EDITORA, ESTOQUE) VALUES
       (" ${dados.titulo}", "${dados.autor}","${dados.valor}" ,"${dados.genero}" , "${dados.editora}", "${dados.estoque}")`)
       .then(result => {
           console.log('result', result);
           resposta({ user: result});
       }).catch(erro => {
           resposta({ erro: 'Erro ao inserir livro!' });
       });
});