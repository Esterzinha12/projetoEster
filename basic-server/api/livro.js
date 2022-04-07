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
        TITULO, AUTOR, VALOR, GENERO_CODIGO, EDITORA_CODIGO, ESTOQUE) VALUES
       (" ${dados.titulo}", "${dados.autor}",${dados.valor} ,${dados.genero} , ${dados.editora}, ${dados.estoque})`)
       .then(result => {
           console.log('result', result);
           resposta({ user: result});
       }).catch(erro => {
           resposta({ erro: 'Erro ao inserir livro!' });
       });
});

inserirRota('/select_livros', (dados, resposta) => {
    console.log(dados);
    database(`SELECT * FROM CADASTRARLIVRO `).then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/excluir_livro', function (dados, resposta) { 
    console.log(dados);
    database(`DELETE FROM CADASTRARLIVRO WHERE CODIGO=${dados.codigo}`)
        .then(result => {
            alert('Livro deletado com sucesso!');
            resposta({ list: result });
        }).catch(erro => {
            console.log('Erro ao deletar o livro!');
        });
});



