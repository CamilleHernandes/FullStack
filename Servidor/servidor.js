require("colors");

var http = require('http'); // inclui o módulo http

var express = require('express'); // incui o modulo express

//cria a variavel app, que vai ser por onde vamos acessar
//os métodos / funções existentes no framework express
var app = express();

//metodo use() é utilizado para definir em qual
//pasta estara o conteudo estatico
app.use(express.static('./public'));

var server = http.createServer(app);

server.listen(80);

console.log("Servidor Rodando....".rainbow)


// cd entra no servidor, que é a pasta que eu quero acessar. 
// O ls mostra tudo que tem dentro desta pasta.
// npm install é pra instalar a biblioteca(pacote)
// node da um "play " o que foi feito no codigo


