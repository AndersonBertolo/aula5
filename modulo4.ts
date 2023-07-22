import promptSync from "prompt-sync"
let prompt = promptSync()


export function exercicio4 ()
    {

// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.


//  let prompt= require("prompt-sync")();

let usuario:number = parseInt( prompt("qual a tabuada"))

for (let contador:number=0; contador<=10; contador++)
    {
        console.log (usuario + "x" + contador + "=" + (usuario*contador))

    }


    }