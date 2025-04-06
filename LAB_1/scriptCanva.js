let canvas1 = document.getElementById('canvas1');

let ctx1 = canvas1.getContext('2d');


function desenhar_quadrado(ctx1,color,x,y,x1,y2){
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.fillStyle = color;
    ctx1.strokeStyle = color
    ctx1.fillRect(x,y,x1,x1,y2)
    ctx1.fill();
    ctx1.closePath();
}

desenhar_quadrado(ctx1, "blue", 0,0,50,50)
desenhar_quadrado(ctx1, "red", 250,0,50,50)
desenhar_quadrado(ctx1, "red", 100,150,50,50)
desenhar_quadrado(ctx1, "aquamarine", 0,120,30,30)
desenhar_quadrado(ctx1, "aquamarine", 0,150,30,30)
desenhar_quadrado(ctx1, "black", 270,240,30,50)
desenhar_quadrado(ctx1, "black", 270,270,30,50)
desenhar_quadrado(ctx1, "black", 270,270,30,50)
desenhar_quadrado(ctx1, "black", 240,270,30,50)
desenhar_quadrado(ctx1, "yellow", 0,270,30,50)
desenhar_quadrado(ctx1, "yellow", 0,240,30,50)
desenhar_quadrado(ctx1, "yellow", 30,270,30,50)

function desenhar_linha(ctx1,color,xm,ym,xl,yl){
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.strokeStyle = color;
    ctx1.moveTo(xm,ym);
    ctx1.lineTo(xl,yl);
    ctx1.stroke();
    ctx1.closePath();
}

desenhar_linha(ctx1,"darkgreen", 0,150,300,150)
desenhar_linha(ctx1,"blue", 0,0,150,150)
desenhar_linha(ctx1,"red",300,0,150,150)
desenhar_linha(ctx1,"black", 150,150,150,300)

function desenhar_circulo(ctx1,color,border,xc,yc,r){
    ctx1.beginPath();
    ctx1.lineWidth = 1;
    ctx1.fillStyle = color;
    ctx1.strokeStyle = border;
    ctx1.arc(xc,yc,r,0,Math.PI * 2); //parametros arc(X onde vai começar, Y onde vai começar, raio do arco, determina onde o arco começa, determina onde o arco termina)
    ctx1.fill();
    ctx1.stroke();
    ctx1.closePath();
}

desenhar_circulo(ctx1,"aquamarine","blue",150,110,15)
desenhar_circulo(ctx1,"yellow","green",210,220,15)
desenhar_circulo(ctx1,"yellow","green",70,220,15)
desenhar_circulo(ctx1,"aquamarine","green",150,300,50)

function desenhar_arcos(ctx1, color, x, y, r, anguloInicio, sentido = false) {
    ctx1.beginPath();
    ctx1.lineWidth = 1;
    ctx1.strokeStyle = color;
    ctx1.arc(x, y, r, 0, anguloInicio * Math.PI);
    ctx1.stroke();
    ctx1.closePath();
}

// Arcos - nao to conseguido tambem
desenhar_arcos(ctx1, "green", 200, 110, 30, 0.5,true);
// desenhar_arcos(ctx1, "green", 150, 270, 45, Math.PI, 0);
// desenhar_arcos(ctx1, "green", 150, 110, 60, Math.PI, 0);



//canvas da casa

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

function desenhar_retangulo(ctx, cor, x, y, largura, altura) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
    ctx.closePath();
}

function desenhar_circulo(ctx, cor, borda, x, y, r) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = cor;
    ctx.strokeStyle = borda;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function desenhar_triangulo(ctx, cor, x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

// fundo
desenhar_retangulo(ctx2, "#90FCD3", 0, 0, 300, 300); // céu

// chão
desenhar_retangulo(ctx2, "gray", 0, 180, 300, 120);

// casa
desenhar_retangulo(ctx2, "#874921", 125, 130, 50, 50); // parede
desenhar_retangulo(ctx2, "brown", 145, 150, 10, 30); // porta
desenhar_retangulo(ctx2, "#51C5FF", 130, 135, 15, 15); // janela esquerda
desenhar_retangulo(ctx2, "#51C5FF", 155, 135, 15, 15); // janela direita

// telhado
desenhar_triangulo(ctx2, "#F26C4F", 125, 130, 175, 130, 150, 105);

// sol
desenhar_circulo(ctx2, "yellow", "yellow", 230, 70, 30);

// árvore esquerda
desenhar_retangulo(ctx2, "#8B4513", 60, 150, 15, 30); // tronco
desenhar_circulo(ctx2, "#2E8B57", "#2E8B57", 67.5, 145, 17); // copa

// árvore direita
desenhar_retangulo(ctx2, "#8B4513", 253, 195, 15, 25);
desenhar_circulo(ctx2, "#2E8B57", "#2E8B57", 260, 180, 17);

// deixar o lago para depois




