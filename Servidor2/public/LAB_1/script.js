//mathfloor() arredonda um numero para baixo, sempre inteiro
// Math.random() gera um numero aleatorio entre 0 e 1, para limitar ele basta multiplicar pelo numero que for preciso
// Ex: Math.random() * 100 - Transforma em um número entre 0 e 99.9999...

let num_aleatorio = Math.floor((Math.random() * 100)); // com o mathfloor,o numero é arredendado para menos e gera um numero entre 0 e 99

let historico = "";

console.log(`Número secreto para teste: ${num_aleatorio}`); // mostra o numero no console, para que eu possa testar 

function adivinha(){

    let chute = document.getElementById("num").value; // .innerhtml nao funciona em input
    let mensagem = document.getElementById("mens");
    let dica = document.getElementById("dica");
    let historicoElemento = document.getElementById("historico");

    if (historico === "") { // if para mostrar pro usuario os numeros já tentados
        historico = chute; // se o usuario acertar de primeira, só mostra o número acertado
    } else {
        historico += ", " + chute; // senao, aparece o número adivinhado, com uma virgula separando eles
    }

    historicoElemento.innerHTML = `Números tentados: ${historico}`; // mostra no paragrafo com id 'mens'
   
    
        if(chute == num_aleatorio){ // se o chute for igual ao numero aleatorio:
            document.getElementById("mens").innerHTML = "Parabéns! Você acertou o numero secreto!!"
            document.getElementById("mens").style.setProperty("background-color", "green"); 

            dica.innerHTML = " "
           
        }
        else if(chute > num_aleatorio){
            dica.innerHTML = "O numero é menor!"
            mensagem.innerHTML = "Que pena deu errado :( <br> Tente novamente"
            document.getElementById("mens").style.setProperty("background-color", "red"); 
        }
        else if(chute < num_aleatorio){
            dica.innerHTML = "O numero é maior!"
            mensagem.innerHTML = "Que pena deu errado :( <br> Tente novamente"
            document.getElementById("mens").style.setProperty("background-color", "red"); 
        }
    }





