
function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  
  background(imagemDaEstrada);
  
  mostraAtor();
  movimentaAtor();
  mostraAtor2();
  movimentaAtor2();
  mostraCarro();
  movimentaCarro();
  verificaColisao();
  mostraPlacar();
  
  
  
}//fim do draw
