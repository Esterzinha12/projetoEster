
database(`CREATE TABLE IF NOT EXISTS ADM (
    USUARIO VARCHAR(45) NOT NULL PRIMARY KEY ,
    SENHA INT NOT NULL
    )`).then(result => {

console.log('TABELA CRIADA COM SUCESSO!');
}).catch(erro => {
console.log('TABELA COM ERRO!');
});

// database(`INSERT INTO ADM VALUES (
//     'esterzinha12',
//     123 
// )`).then(result => {
// console.log('TABELA CRIADA COM SUCESSO!');
// }).catch(erro => {
// console.log('TABELA COM ERRO!123');
// });
