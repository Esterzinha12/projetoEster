import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  criar_adm(usuario, senha) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/criar_adm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usuario: usuario,
            senha: senha,
            
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
  
  select_login(usuario, senha) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/select_login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usuario: usuario,
            senha: senha
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  
  cadastrar(titulo, autor, valor, genero, editora, estoque, imageURL) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/cadastrar',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            titulo: titulo,
            autor: autor,
            valor: valor,
            genero: genero,
            editora: editora,
            estoque: estoque,
            imageURL:imageURL
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  listarLivros(codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/select_livros',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
  excluir_livro(codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/excluir_livro',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           codigo: codigo
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  cadasgenero(genero) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/cadasgenero',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            genero: genero
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  select_genero() {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/select_genero',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
  excluir_genero(genero) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/excluir_genero',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            genero : genero
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
  
  cadaseditora(editora) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/cadaseditora',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            editora: editora
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  excluir_editora(editora) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/excluir_editora',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            editora: editora
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
  select_editora() {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/select_editora',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
 
  editar_livro(codigo,estoque) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/editar_livro',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            estoque,
            codigo
          })
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
  
  
  }


