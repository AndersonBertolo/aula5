// Instalação TypeScript -> npm i -g typescript
// Instalação de pacote para rodar no terminal -> npm i -g ts-node
// Instalação de Prompt-Sync ->npm i prompt-sync
// Rodar prompt-sync -> npm i --save-dev @types/prompt-sync

// Para rodar no terminal-> ts-node arquivo.ts
// caso de erro usar 
// // Para rodar no terminal-> npx ts-node arquivo.ts



import promptSync from "prompt-sync"
import { exercicio1 } from "./modulo1";
import { exercicio2 } from "./modulo2";
import { exercicio3 } from "./modulo3";
import { exercicio4 } from "./modulo4";
import { exercicio5 } from "./modulo5";
import { exercicio6 } from "./modulo6";
import { exercicio7 } from "./modulo7";
import { exercicio8 } from "./modulo8";
import { exercicio9 } from "./modulo9";
import { exercicio10 } from "./modulo10";
        import { exercicio11 } from "./modulo10";

        
let prompt = promptSync()
let resposta: string;

do
{
    console.log("bem vindo ao menu de exercicio")

    resposta = prompt("digite um numero de 1 a 6, para excolher um exercicio, ou sair")

switch (resposta) 
    {
    case "1":
        console.log("voce escolheu o exercicio 1")
        exercicio1 ()
    break;

    case "2":
        console.log("voce escolheu o exercicio 2")
        exercicio2 ()
    break;

    case "3":
        console.log("voce escolheu o exercicio 3")
        exercicio3 ()
    break;

    case "4":
        console.log("voce escolheu o exercicio 4")
        exercicio4 ()
    break;
    
    case "5":
        console.log("voce escolheu o exercicio 5")
        exercicio5 ()
    break;    

    case "6":
        console.log("voce escolheu o exercicio 6")
        exercicio6 ()
    break;

    case "7":
        console.log("voce escolheu o exercicio 7")
        exercicio7 ()
    break;

    case "8":
        console.log("voce escolheu o exercicio 8")
        exercicio8 ()
    break;


    case "9":
        console.log("voce escolheu o exercicio 9")
        exercicio9 ()
    break;

    case "10":
        console.log("voce escolheu o exercicio 10")
        exercicio10 ()
    break;

    case "11":
        console.log("voce escolheu o exercicio 11")
        exercicio11 ()
    break;


    default:
        console.log("voce nao escolheu nenhum exercicio")
        break;
    }




} while (resposta != "sair")