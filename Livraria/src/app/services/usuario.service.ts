import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuario() {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/buscar_usuario',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  login(usuario, senha) {
    return new Promise((resolvido, rejeitado) => {
      fetch('api/login',
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

  cadastrar(titulo, autor, valor, genero, editora, estoque) {
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
            estoque: estoque
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


}