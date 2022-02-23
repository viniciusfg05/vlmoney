import axios from 'axios';

//Criando um instancia


export const api = axios.create({
    baseURL: 'http://localhost:3000/api',//vamos colocar o endereço que se repete em todas a requisições
})