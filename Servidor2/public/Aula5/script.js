//window.alert("olá");//mostra mensagem para usuario (nao é usado)

console.log("ola");//coloca mensagem para o usuario

let nome = prompt("Qual o seu nome?")//entrada de dados
console.log(nome)

// == (ampla) transforma dois valores ou mais no mesmo tipo e compara
// === (estrita) somente compara, nao transforma nada

let i = 0;

while(i<10){
    console.log(i)
    i++
}

// for(let i = 0; i < 10; i++){
//     console.log(i)
// } // mesma coisa do while, mas com tudo junto

//Desenvolver um algoritmo em JavaScript que exiba os números ímpares de 1 a 100

for(let i = 1; i < 100; i+=2)
{
    console.log(i)
} 

//Faça um programa para imprimir os múltiplos de 5, no intervalo de 1 até 500

for(let i = 5; i <= 500; i+=5)
    {
        console.log(i)
    } 


//Faça um programa em JavaScript que leia um número inteiro positivo e mostre todos os números a 
// partir dele até zero (decrescente).  

let numero = prompt("Digite um numero positivo")

if(numero < 0){
    console.log("Numero invalido")
}

for(let i = numero; i >= 0; i -= 1){
    console.log(i);
}



let num = prompt("Digite um numero positivo")

if(num < 0){
    console.log("Numero invalido")
}
else if(num>=0){

    let multi = 1
    for(let i = num; i <= 0; i ++){
        
        multi *= i
        console.log(i,multi);
    }
}
else{
    console.log("invalido")
}

