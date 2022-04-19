
database(`CREATE TABLE IF NOT EXISTS LOGINADM (
    CODIGO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    USUARIO VARCHAR(45) NOT NULL,
    SENHA VARCHAR(45) NOT NULL
    )`).then(result => {

console.log('TABELA LOGINADM CRIADA COM SUCESSO!');
}).catch(erro => {
    console.log(erro);
console.log('TABELA LOGINADM COM ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS GENERO (
    CODIGO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    GENERO VARCHAR(45) NOT NULL
    )`).then(result => {

console.log('TABELA GENERO CRIADA COM SUCESSO!');
}).catch(erro => {
console.log('TABELA GENERO COM ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS EDITORA (
    CODIGO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    EDITORA VARCHAR(45) NOT NULL
    )`).then(result => {

console.log('TABELA EDITORA CRIADA COM SUCESSO!');
}).catch(erro => {
console.log('TABELA EDITORA COM ERRO!');
});

database(`CREATE TABLE IF NOT EXISTS CADASTRARLIVRO (
    CODIGO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,
    TITULO VARCHAR(60) NOT NULL,
    AUTOR VARCHAR(60) NOT NULL,
    VALOR INTEGER NOT NULL,
    GENERO_CODIGO INTEGER NOT NULL,
    EDITORA_CODIGO INTEGER NOT NULL,
    ESTOQUE INTEGER NOT NULL,
    IMAGEURL VARCHAR(9999999999999999) 
    )`).then(result => {
console.log('TABELA CADASTRAR LIVRO CRIADA COM SUCESSO!');
}).catch(erro => {
console.log('TABELA CADASTRAR LIVRO COM ERRO!');
});

// database(`CREATE TABLE IF NOT EXISTS PESSOA (
//     CPF CHAR(11) NOT NULL PRIMARY KEY,
//     NOME_COMPLETO VARCHAR(45) NOT NULL,
//     EMAIL VARCHAR(100),
//     NASCIMENTO DATE
//     )`).then(result => {

// console.log('TABELA PESSOA CRIADA COM SUCESSO!');
// }).catch(erro => {
// console.log('TABELA PESSOA COM ERRO!');
// });

// database(`CREATE TABLE IF NOT EXISTS CADASTRARADM (
//     USUARIO VARCHAR(45) NOT NULL PRIMARY KEY,
//     SENHA INTEGER NOT NULL,
//     PESSOA_CPF CHAR(11) NOT NULL,
//     FOREIGN KEY (PESSOA_CPF)
//     REFERENCES PESSOA(CPF)
//     ON DELETE CASCADE
//     ON UPDATE CASCADE
//     )`).then(result => {

// console.log('TABELA CADASTRARADM CRIADA COM SUCESSO!');
// }).catch(erro => {
// console.log('TABELA CADASTRARADM COM ERRO!');
// });



