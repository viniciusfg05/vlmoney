import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  //criando banco de bados

  //começando com o propriedade models
  
  models : { 
    transaction: Model //modulo que vamos criar 
  },

  routes() {
    this.namespace = 'api'; 

    this.get('/transactions', () => {
      return this.schema.all('transaction') //retornar todas a transações
    })//quando ouver uma requisição do tipo get para a rota transactions
      
    //criando uma rota
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) //

      return schema.create('transaction', data)
    })
  }
})



//router: rotas fakes
//this.namespace = 'api': na rota informanda no Useffect "http://localhost:3000/api/transactions" apartir da "api"
//this.get('/transactions')//quando ouver uma requisição do tipo get para a rota transactions
//() => : vou devolver alguma coisa

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
