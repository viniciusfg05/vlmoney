import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'; 

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: "transaction 1",
          amount: 400,
          type: 'deposit',
          category: 'food',
          createAt: new Date()
        }
      ]
    }  )//quando ouver uma requisição do tipo get para a rota transactions
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
