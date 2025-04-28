let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//faz assim

function desenhar(){
    ctx.fillStyle= this.cor
    ctx.fillRect(this.x,this.y,this.largura,this.altura)//usamos o this para selecionar todas as variaveis que estao no objeto(ret1)
}

let ret1 = {
    x:0,
    y:0,
    largura:20,
    altura:20,
    cor: 'red',
    desenha: desenhar // chama a funcão desenhar()
}

//ou assim

let ret2 = {
    x:200,
    y:200,
    largura:20,
    altura:20,
    cor: 'blue',
    desenha: desenhar // chama a funcão desenhar()
}

let ret3 = {
    x:250,
    y:250,
    largura:20,
    altura:20,
    cor: 'green',
    desenha: desenhar // chama a funcão desenhar()
}

retangulos = [ret1,ret2,ret3] //vetor com os objetos

for(let i = 0; i < retangulos.length;i++){ //vai fazendo os retangulos ate a quantidade de objetos do vetor acabar
    //o lenght retorna o tamanho do vetor
    retangulos[i].desenha()
}



//essa é uma maneira de fazer a mesma coisa que o 'for' fez

// ret1.desenha() //acessa a funcao desenha() que esta dentro do obj ret1
// ret2.desenha()
// ret3.desenha()


// animação do canvas

function animacao(){ //animacão do ret1

    if (ret1.x == 300 - ret1.largura){ //se o quadrado chegar ao final do canvas ele volta
        direcao = -1
    }
    if (ret1.x == 0){ //se nao tiver chegado no final ainda, continua
        direcao = 1
    }


    ret1.x += direcao // pega o valor do x e adiciona mais 1

    ctx.clearRect(0,0,300,300) // apaga do x,y = 0 ao x,y = 300(que é o tamanho do canvas)
   
    ret1.desenha()
    ret2.desenha()
    ret3.desenha()

    requestAnimationFrame(animacao) // faz o quadradinho se mover
}

animacao() //chama a funcão

document.addEventListener('keydown', function(evento){ //evento que move o objeto de acordo com a tecla pressionada
    let tecla = evento.key;
    console.log(tecla)

    let velocidade = 3

    if(tecla == 'ArrowUp'){ 
        ret2.y -= velocidade;
    }
    if(tecla == 'ArrowDown'){
        ret2.y += velocidade;
    }
    if(tecla == 'ArrowRight'){
        ret2.x += velocidade;
    }
    if(tecla == 'ArrowLeft'){
        ret2.x -= velocidade;
    }
})

document.addEventListener('mousemove',function(evento){ // evento que captura a posicão do mouse e faz mover
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    console.log(x_mouse,y_mouse);

    ret3.x = x_mouse
    ret3.y = y_mouse
})

