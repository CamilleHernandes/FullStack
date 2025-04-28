let canvas1 = document.getElementById('canvas1');
let canvas2 = document.getElementById('canvas2');
let canvas3 = document.getElementById('canvas3');
let ctx1 = canvas1.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let ctx3 = canvas3.getContext('2d');


// exemplo 1

// retangulos
ctx1.beginPath(); //começa um novo desenho
ctx1.lineWidth = 2;
ctx1.fillStyle = 'blue'; // fill - cor preenchimento
ctx1.strokeStyle = 'red'; // stroke - cor borda
ctx1.fillRect(10,10,50,50); // ordem: fillrect(primeiro X, primeiro Y, altura, largura)
ctx1.strokeRect(0,0,70,70); //  outro quadrado, como se fosse uma borda (mesma ordem)
ctx1.closePath(); // fecha o desenho


// linhas
ctx1.beginPath();
ctx1.lineWidth = 2; // largura da linha
ctx1.fillStyle = 'green';
ctx1.strokeStyle = 'red';
ctx1.moveTo(200,150); // move sem tocar a tela, somente movendo a forma
ctx1.lineTo(70,0); // move tocando na tela, fazendo o desenho
ctx1.lineTo(70,250);
ctx1.lineTo(200,250);
ctx1.lineTo(200,150);
ctx1.fill(); // faz ele desenhar e preencher
ctx1.stroke(); // desenha apenas as bordas, tambem seguindo as instruções
ctx1.closePath();

// arcos
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'darkred';
ctx1.strokeStyle = 'red';
ctx1.arc(300,200,50,0*Math.PI,2.5*Math.PI); //parametros arc(X onde vai começar, Y onde vai começar, raio do arco, determina onde o arco começa, determina onde o arco termina)
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

// texto
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'pink';
ctx1.strokeStyle = 'red';
ctx1.font = "90px Arial" // fonte e tamanho do texto
ctx1.textAlign = "center";
ctx1.fillText("Formas",200,350); // no filltext o primeiro parametro é o texto que vai ser exibido
ctx1.strokeText("Formas",200,350)
ctx1.closePath();


// exemplo 2 

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.fillRect(0,0,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'blue';
ctx2.fillRect(350,0,50,50);
ctx2.closePath();
ctx2.beginPath();

ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,350,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green';
ctx2.fillRect(350,350,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2; // largura da linha
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'red';
ctx2.moveTo(400,400); // move a linha sem tocar a tela, somente movendo a forma
ctx2.lineTo(20,20); // move a linha tocando na tela, fazendo o desenho
ctx2.fill(); // faz ele desenhar e preencher
ctx2.stroke(); // desenha apenas as bordas, tambem seguindo as instruções
ctx2.closePath();








