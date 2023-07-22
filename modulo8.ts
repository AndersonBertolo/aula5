import promptSync from "prompt-sync"
let prompt = promptSync()

export function exercicio8 ()
    {

// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


// let prompt = require ("prompt-sync")()
let numero:number=0;


do {
    numero = parseFloat (prompt("Qual a idade? "))
} while (numero < 18);
console.log(numero)


    }