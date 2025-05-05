require("colors");

var http = require('http'); // inclui o módulo http

var express = require('express'); // incui o modulo express

var bodyParser = require("body-parser")

//cria a variavel app, que vai ser por onde vamos acessar
//os métodos / funções existentes no framework express
var app = express();

//metodo use() é utilizado para definir em qual
//pasta estara o conteudo estatico
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

var server = http.createServer(app);

server.listen(80);

console.log("Servidor Rodando....".rainbow)


// cd entra no servidor, que é a pasta que eu quero acessar. 
// O ls mostra tudo que tem dentro desta pasta.
// npm install é pra instalar a biblioteca(pacote)
// node da um "play " o que foi feito no codigo

//LAB 1 
 app.post('/login', function(requisicao,resposta){
    let email = requisicao.body.email; 
    let senha = requisicao.body.senha; 

    console.log(email,senha);

    resposta.render('resp.ejs',
     {email: email, senha: senha});

 })

 app.post('/cadastra', function(requisicao,resposta){
    let nome = requisicao.body.nome; 
    let email = requisicao.body.email; 
    let senha = requisicao.body.senha; 
    let nasc = requisicao.body.nasc; 

    console.log(nome,email,senha,nasc);
    
 })

//Exemplos de GET e POST

// app.get('/inicio', function(requisicao,resposta){
//     resposta.redirect('Aula1/index.html')
// })

// app.post('/inicio', function(requisicao,resposta){// a variavel resposta redireciona para algum lugar
//     resposta.redirect('Aula1/index.html') //faz o botao do index redirecionar para o index da aula1
// })

// app.get('/cadastrar', function(requisicao,resposta){// a variavel requisicao pega as informaçoes
//    let nome = requisicao.query.nome; // variavel que pega as informacoes a partir do name que esta nos inputs
//    let email = requisicao.query.email; // query é o que aparece na barra de endereço, por isso só é usado com get
//    let senha = requisicao.query.senha;
//    let nasc = requisicao.query.nasc;

//    console.log(nome,email,senha,nasc);

//    resposta.render('resposta.ejs',
//     {mensagem: "usuario cadastrado com sucesso", usuario: nome, login: email});
// })


// app.post('/cadastrar', function(requisicao,resposta){// a variavel requisicao pega as informaçoes
//    let nome = requisicao.body.nome; // variavel que pega as informacoes a partir do name que esta nos inputs
//    let email = requisicao.body.email; // o body é usado somente com post
//    let senha = requisicao.body.senha;
//    let nasc = requisicao.body.nasc;

//    console.log(nome,email,senha,nasc);

//    resposta.render('resposta.ejs', 
//     {mensagem: "usuario cadastrado com sucesso", usuario: nome, login: email}); //renderiza as informações de acordo com as variaveis colocadas no resposta.ejs
// })

// app.get('/for_ejs', function(requisicao,resposta){// a variavel requisicao pega as informaçoes
//     let num = requisicao.query.num;

//     resposta.render('exemplo_for.ejs', {tamanho: num});
//  })
 


