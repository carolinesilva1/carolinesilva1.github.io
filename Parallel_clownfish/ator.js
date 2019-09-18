//ator.js
let yAtor = 366;
let xAtor = 100;
let yAtor2 = 366;
let xAtor2 = 320;
let colidiu = false;
let placar = 0;
let meusPontos=0;
let pontosOPonente=0;
let ponto=0;

function mostraPlacar(){
  
  if(yAtor < 15){ //Marca ponto
    placar += 1;
    voltaAtorParaPosicaoInicial();
    somPonto.play();
    
    }
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(placar, 180, 30);


}

if(yAtor2 < 15){ //Marca ponto
    placar += 1;
    voltaAtor2ParaPosicaoInicial();
    somPonto.play();
    
    
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(placar, 180, 30);
}



function verificaColisao(){
  //collideRectCircle(rx, ry, rComprimento, rAltura, cx, cy, diameter)
  for(let i=0; i < imagensCarros.length; i++){
    //Pergunta se colidiu, recebe resposta true ou false
    
    colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor, yAtor,15, xAtor2, yAtor2,15);
    
    if(colidiu){
      console.log("Colidiu");
      voltaAtorParaPosicaoInicial();
      
      somColidiu.play();
      
      if(placar > 0) //Só tira ponto se for maior que ZERO
         placar -= 1; //Perde ponto
      
      
    }//Fim do if    
  }//Fim do for  
}//Fim do verificaColisao

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function mostraAtor(){
  image(imagemDoAtor,xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
    //Se a seta para cima for pressionada
    //E o yAtor maior que 5, então sobe.
    if(yAtor > 5)
      yAtor -= 3;
  }  
  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor < 366)
      yAtor += 3;
    
  }
}
function voltaAtor2ParaPosicaoInicial(){
  yAtor2 = 5;
}
function mostraAtor2(){
  image(imagemDoAtor2,xAtor2, yAtor2, 30, 30);
}

function movimentaAtor2(){
  if (keyIsDown(87)) { 
    //Se a tecla S for pressionada -87
    //E o yAtor menor que 10, então sobe.
    if(yAtor2 < 10)
      yAtor2 += 6;
   
  }  
  if (keyIsDown(83)) { //Se a tecla W for pressionada -83
    //E o yAtor  for menor que 6, então desce
    if(yAtor2 < 6);
      yAtor2 -= 3;
    
  }
}

