// npm init
// npm install express
// npm install nodejs
// npm install ejs
// npm install mongodb@4.12

var http = require('http'); // inclui o módulo http
var express = require('express'); // incui o modulo express
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://camillehernandes14:Camille14@camille.haiuuiv.mongodb.net/?retryWrites=true&w=majority&appName=Camille'
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("lab10");
var usuarios = dbo.collection("usuarios");
var carros = dbo.collection("carros");

client.connect();

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

console.log("Servidor Rodando....")

// abre no cadastro.html
app.get('/', function (requisicao, resposta){
resposta.redirect('cadastroLab10.html')
})

app.post('/cad', function(req,resp){
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    console.log(nome, email, senha);

    let data= {db_nome: nome, db_email: email, db_senha: senha};
    usuarios.insertOne(data, function(erro){
        if(erro){
            resp.render('cad.ejs', {resp: "erro ao cadastrar"})
        }
        else{
            resp.render('cad.ejs', {resp: "cadastrado com sucesso"})
        }
    })
})

app.post('/login', function(req,resp){
    let email = req.body.email;
    let senha= req.body.senha;

    console.log(email, senha);

    let data = {db_email: email, db_senha: senha};
    usuarios.find(data).toArray(function(erro,items){
        console.log(items);
        if(items.length == 0){
            resp.render('log.ejs', {resp: "Usuário não encontrado"})
        }
        else if(erro){
            resp.render('log.ejs', {resp: "Erro ao buscar usuário"})
        }
        else{
            resp.render('log.ejs', {resp: "usuario logado com sucesso"})
        };
    })
})

app.post('/cadCarro', function(req,resp){
    let marca = req.body.marca;
    let modelo = req.body.modelo;
    let ano = req.body.ano;
    let qtd = req.body.qtd;

    console.log(marca, modelo, ano, qtd);

    let data = {db_marca: marca, db_modelo: modelo, db_ano: ano, db_qtd: qtd};
    carros.insertOne(data, function(erro){
        if(erro){
        resp.render('carros.ejs', {mens: "Erro ao cadastrar carro"})
        }
        else{
            resp.render('carros.ejs', {mens: "Carro cadastrado com sucesso"})
        }
    })
})

app.post('/excluirCarro', function(req,resp){
    var data = {db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano};

    carros.deleteOne(data, function(erro, result){
        console.log(result)
        if(result.modifiedCount == 0){
            resp.render('carros.ejs', {mens: "carro nao encontrado"})
        }
        else if(erro){
        resp.render('carros.ejs', {mens: "erro"})
        }
        else{
            resp.render('carros.ejs', {mens: "carro excluido com sucesso"})
        }
    })
})

app.post('/atualizarCarro', function(req,resp){
    var data = {db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano};
    var newdata = {$set: {db_marca: req.body.novamarca, db_modelo: req.body.novomodelo, db_ano: req.body.novoano}};

    carros.updateOne(data,newdata, function(erro, result){
        console.log(result)
        if(result.modifiedCount == 0){
            resp.render('carros.ejs', {mens: "carro nao encontrado"})
        }
        else if(erro){
            resp.render('carros.ejs', {mens: "erro"})
        }
        else{
            resp.render('carros.ejs', {mens: "carro atualizado com sucesso"})
        };
    });

})

app.post('/vender', function(req, resp){
    var data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano };

    carros.findOne(data, function(erro, carro){
        if (!carro || carro.db_qtd <= 0) {
            resp.render('carros.ejs', {mens: "Carro esgotado ou não encontrado!"});
            return;
        }

        var novaQtd = carro.db_qtd - 1;

        carros.updateOne(data, { $set: { db_qtd: novaQtd } }, function(erro){
            if (erro) {
                resp.render('carros.ejs', {mens: "Erro ao vender o carro!"});
            } else {
                let mensagem;

            if (novaQtd === 0) {
                mensagem = "Esgotado!";
            } else {
                mensagem = `Venda realizada! Restam ${novaQtd} unidades.`;
                resp.render('carros.ejs', {mens: "Venda realizada!"});
            }

            }
        });
    });
});

app.get('/listaCarros', function (req, res) {
    carros.find().toArray(function (erro, listaCarros) {
        if (erro) {
            res.render('listaCarros.ejs', { carros: [], erro: "Erro ao buscar carros." });
        } else {
            res.render('listaCarros.ejs', { carros: listaCarros });
        }
    });
});

