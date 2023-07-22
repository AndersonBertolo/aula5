import promptSync from "prompt-sync"
let prompt = promptSync()


export function exercicio5 ()
    {

// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

// let prompt= require("prompt-sync")();

let anterior:number = parseInt( prompt("Qual o primeiro numero: "))
let atual:number = parseInt( prompt("Qual o segundo numero: "))
let resultado:number

for (let contador:number=0; contador<=40; contador++)
    {
        resultado = anterior + atual
        console.log (resultado)

        atual = anterior
        anterior = resultado

    }


    }