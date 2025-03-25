p1 = document.getElementById("p1").innerHTML //mostra somente o que ta escrito dentro da tag
console.log(p1)


document.getElementById("p1").innerHTML = "Novo texto" // escreve outro texto, no lugar do que esta escrito no HTML

//exemplo 1
// let nome = prompt("Digite o seu nome! ");
// let idade = prompt("Digite a sua idade! ");
// let anoAtual = 2025;

// let anoNasc = anoAtual - idade;

// let respostaEx1 = 'Olá ' + nome + ', seu ano de nascimento é: ' + anoNasc + '!';

// document.getElementById("ex1").innerHTML = respostaEx1; // mostra a resposta do Ex1 no paragrafo com id 'ex1'


// para comentar é ctrl + ;

//Funções

function imprimefrase(frase){ // imprime o que estiver escrito na variavel quando chamar a função
    document.getElementById("exFuncao").innerHTML = frase;

}

imprimefrase('hello world'); //executando a função com qualquer frase 
imprimefrase('ola mundo');

function soma(a,b){
    return a + b; //retorna a+b, que podem ser qualquer numero
}

function multi(a,b){
    return a * b; //retorna a*b, que podem ser qualquer numero
}


let c = soma(4,6);
console.log(c);
console.log(soma(3,2));
console.log(soma(16,-5));

//Eventos
function exInput(){
    let v = document.getElementById('ex_Input').value;

    document.getElementById('exFuncao').innerHTML = v; // quando o botao for clicado ele pega o que o usuario 
                                                      //escreveu no input e coloca no paragrafo que tem esse id
}

function ex2(){
    let num = document.getElementById('ex2').value // pega o valor de dentro do input

    let resp = "";
    console.log('Resposta Ex02');

    for(let i = 0; i <= num; i++){
        console.log(i); // mostrando no console

        resp += i + ' '
    }

    document.getElementById('ex2_resp').innerHTML = resp // mostrando no paragrafo
}


function ex3(){
    let num1 = parseInt(document.getElementById('ex3_num1').value);
    let num2 = parseInt(document.getElementById('ex3_num2').value);

    resp = soma(num1,num2);

    document.getElementById('ex3_resp').innerHTML = resp
}



function ex4(){
    let num1 = parseInt(document.getElementById('ex4_num1').value);
    let num2 = parseInt(document.getElementById('ex4_num2').value);

    let resp = ''

    if(num1 < 0 || num2 < 0){ // se algum numero for menor que zero, somar 
        resp = soma(num1,num2);
    }
    else{ // se forem os dois positivos, multiplicar
        resp = multi(num1,num2); // funcao de multiplicar
    }

    document.getElementById('ex4_resp').innerHTML = resp
}




