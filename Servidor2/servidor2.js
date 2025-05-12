require("colors");

var http = require('http'); // inclui o módulo http
var express = require('express'); // incui o modulo express
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://camillehernandes14:Camille14@camille.haiuuiv.mongodb.net/?retryWrites=true&w=majority&appName=Camille;'
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");
var posts = dbo.collection("posts");

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

// Redireciona '/' para a página de projetos
app.get('/', function(req, res) {
  res.redirect('LAB_1/projects.html');
});


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

// LAB_1 Create e Read

// Rota que exibe todos os posts
app.get('/blog', function(req, res) { // Busca todos os posts no banco de dados
  posts.find().toArray(function(err, lista) {
    if (err) {
      res.send("Erro ao buscar posts.");
    } else {
      res.render('blog.ejs', { posts: lista });
    }
  });
});

// Página do formulário
const path = require('path'); // importando o módulo 'path' para juntar as pastas

app.get('/cadastraPost', function(req, res) {
  // Corrigindo o caminho com path.join()
  res.sendFile(path.join(__dirname, 'public' ,'LAB_1', 'cadastrar_post.html')); // o path.join() junta as pastas, o dirname é a pasta atual(Servidor2)
});

// Cadastro de novo post
app.post('/cadastraPost', function(req, res) { // Coleta os dados do formulário
  let titulo = req.body.titulo;
  let resumo = req.body.resumo;
  let conteudo = req.body.conteudo;

  let novoPost = { titulo, resumo, conteudo }; // Cria um novo objeto com os dados do post

  posts.insertOne(novoPost, function(err) { // Insere o novo post no banco de dados
    if (err) {
      res.send("Erro ao cadastrar post.");
    } else {
      res.redirect('/blog');
    }
  });
});


// Exemplos de GET e POST

app.get('/inicio', function(requisicao,resposta){
    resposta.redirect('Aula1/index.html')
})

app.post('/inicio', function(requisicao,resposta){// a variavel resposta redireciona para algum lugar
    resposta.redirect('Aula1/index.html') //faz o botao do index redirecionar para o index da aula1
})

app.get('/cadastrar', function(requisicao,resposta){// a variavel requisicao pega as informaçoes
   let nome = requisicao.query.nome; // variavel que pega as informacoes a partir do name que esta nos inputs
   let email = requisicao.query.email; // query é o que aparece na barra de endereço, por isso só é usado com get
   let senha = requisicao.query.senha;
   let nasc = requisicao.query.nasc;

   console.log(nome,email,senha,nasc);

   resposta.render('resposta.ejs',
    {mensagem: "usuario cadastrado com sucesso", usuario: nome, login: email});
})


app.post('/cadastrar', function(requisicao,resposta){// a variavel requisicao pega as informaçoes
   let nome = requisicao.body.nome; // variavel que pega as informacoes a partir do name que esta nos inputs
   let email = requisicao.body.email; // o body é usado somente com post
   let senha = requisicao.body.senha;
   let nasc = requisicao.body.nasc;

   console.log(nome,email,senha,nasc);

   let data = {db_nome: nome, db_email: email, db_senha: senha, db_nasc: nasc} // faz com que as informacões sejam inseridas no bd
   usuarios.insertOne(data, function(err){
      if (err){
         resposta.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else{
         resposta.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})
      }
   })
})

app.get('/for_ejs', function(requisicao,resposta){// a variavel requisicao pega as informaçoes
    let num = requisicao.query.num;

    resposta.render('exemplo_for.ejs', {tamanho: num});
 })
 
app.post('/login', function(requisicao,resposta){
   let email = requisicao.body.email
   let senha = requisicao.body.senha

   console.log(email,senha)

   let data = {db_email: email, db_senha: senha};
   usuarios.find(data).toArray(function(err,itens){
      console.log(itens);
      if (itens.length == 0) {
         resposta.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
       }else if (err) {
         resposta.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
       }else {
         resposta.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
       }; 
   })
})

// para instalar o mongodb: npm install mongodb@4.12
