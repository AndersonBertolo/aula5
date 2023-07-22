import promptSync from "prompt-sync"
let prompt = promptSync()

export function exercicio9 ()
    {

// 9. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

// let prompt = require ("prompt-sync")()


let numero:number = parseInt (prompt("Digite um numero? "))
 

while (numero>=0)
{
    console.log (numero--)
}


    }