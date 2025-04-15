let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')



let bola ={
    x: 150,
    y: 100,
    raio: 30,
    img: new Image(),
    desenha: function(){
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio); // Desenha a imagem da bola
        //(this.x - this.raio, this.y - this.raio) - faz deixar a imagem centralizada onde o mouse está
        ctx.closePath();
    }

}

bola.img.src = 'imagem/woman.png';

// Inicia a animação quando a imagem carregar
bola.img.onload = function () {
    console.log("Imagem carregada")
    animar();
};

// variáveis de posição do mouse
let x_mouse = 0;
let y_mouse = 0;

document.addEventListener('mousemove',function(evento){ // evento que captura a posicão do mouse e faz mover
    let rect = canvas.getBoundingClientRect(); // Pega a posição do canvas na tela
    x_mouse = evento.clientX - rect.left; // calcula a posição X do mouse dentro do canvas
    y_mouse = evento.clientY - rect.top; // Calcula a posição Y do mouse dentro do canvas

})

// animação que mantém a imagem mesmo com o mouse fora do canvas
function animar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Atualiza a posição da bola
    // Garante que a imagem nunca saia fora do canvas
    bola.x = Math.min(Math.max(x_mouse, bola.raio), canvas.width - bola.raio);
    bola.y = Math.min(Math.max(y_mouse, bola.raio), canvas.height - bola.raio);

    // Desenha a bola, atualizando sua posição
    bola.desenha();

    requestAnimationFrame(animar); // chama a função animar()
}