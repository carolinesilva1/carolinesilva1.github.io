//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [242, 78, 7];
let velocidadeX = 3;
let velocidadeY = 3;

//Variáveis Raquete
let alturaRaquete = 100;
let larguraRaquete = 20;

//Variáveis Minha Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [255, 0, 255]; //Preto

//Variáveis Raquete do Oponente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [255,0,0];//RGB

//variaveis placar
let pontosMeus=0;
let pontosOponente=0;

let ponto;
let raquetada;

function preload(){
raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
}

//Configuração Inicial
function setup() {
createCanvas(600, 400);
largura = width;
altura = height;
print("Largura: "+largura+" Altura: "+altura);

}
//Desenha - Looping infinito while(1) / Sempre
function draw() {
background(0,0,0);
  //se os pontos meus nao forem maiores ou 
  //iguais a 10 ou os pontos do oponente
  //nao forem maiores ou iguais a 10, entao
  //JOGA!
  if(!(pontosMeus >=10 || pontosOponente >=10))
  
    
  jogo();
  else
    mostraVencedor();

frameRate(60); //30fps
//print("yMinhaRaquete: " + yMinhaRaquete);
} //draw - desenha

function mostraVencedor(){
if(pontosMeus >=10){
  fill(255,130,0);//laranja
  rect(300,0,300,400);//metade direita da tela
  textAlign(CENTER);
  textSize(30)
  text("Lado direito é campeão",300,200);


}else{
  
  
  fill(255,130,0);//laranja
  rect(300,0,300,400);//metade direita da tela
  textAlign(CENTER);
  textSize(30)
  text("Lado esquerdo é campeão",300,200);
  }
  
  }





function jogo(){
  
  
mostraBolinha();
movimentaBolinha();
verificaColisao(); 
mostraRaquete();
movimentaMinhaRaquete();
movimentaRaqueteOponente();
verificaColisaoRaquete();
marcaPonto();
mostraPlacar();
  
  
}


function mostraPlacar(){
  textSize(30);
  strokeWeight(4);//largura da borda
  stroke(93,36,173);//cor da borda = roxo
  
  fill(0,200,0);//retangulo verde
  rect(425,12,60,35,10);//retangulo meus pontos
  rect(125,12,60,35,10);//retangulo pontos oponente
  
fill(255);//branco
  textAlign(CENTER);//Alinhamento centralizado do texto
text(pontosMeus, 450, 40);
text(pontosOponente, 150,40);
  
    
}

function marcaPonto(){
 if (xBolinha < 15){
    //incremento os pontos
   pontosMeus +=1;//pontosMeus = pontosMeus + 1
   ponto.play();
 }
  if(xBolinha > 580){
  pontosOponente += 1;
    ponto.play();
  }
}


function verificaColisaoRaquete(){

if(xBolinha + raio > xMinhaRaquete && 
yBolinha - raio < yMinhaRaquete + alturaRaquete && 
yBolinha + raio > yMinhaRaquete){

if(!(xBolinha < 300 && velocidadeX > 0 || 
xBolinha > 300 && velocidadeX < 0)){
velocidadeX *= -1; 
  raquetada.play();
}

}//Minha Raquete

if(xBolinha - raio < xRaqueteOponente + larguraRaquete && 
yBolinha - raio < yRaqueteOponente + alturaRaquete && 
yBolinha + raio > yRaqueteOponente){

if(!(xBolinha < 300 && velocidadeX > 0 || 
xBolinha > 300 && velocidadeX < 0)){
velocidadeX *= -1; 
   raquetada.play();
} 

}//Raquete do Oponente

} //Não me deleta pelo amor de Deus

function movimentaMinhaRaquete(){ 

if(keyIsDown(UP_ARROW)){//SETA_PARA_CIMA - 87 W

if(yMinhaRaquete < 0){
yMinhaRaquete = 0; //Corrigindo
}else{
yMinhaRaquete -= 10; //Velocidade da Raquete
} 
}

if(keyIsDown(DOWN_ARROW)){//SETA_PARA_BAIXO - 83 S
if(yMinhaRaquete > 300){
yMinhaRaquete = 300; //Corrigindo
}else{
yMinhaRaquete += 10; //Velocidade da Raquete
}
} 
}

function movimentaRaqueteOponente(){ 
if(keyIsDown(87)){//SETA_PARA_CIMA - 87 W

if(yRaqueteOponente < 0){//Em cima
yRaqueteOponente = 0; //Corrigindo
}else{
yRaqueteOponente -= 10; //Velocidade da Raquete
} 
}

if(keyIsDown(83)){//SETA_PARA_BAIXO - 83 S
if(yRaqueteOponente > 300){//Embaixo
yRaqueteOponente = 300; //Corrigindo
}else{
yRaqueteOponente += 10; //Velocidade da Raquete
}
} 
}



function mostraRaquete(){
//Mostra minha raquete à direita
fill(corMinhaRaquete);
rect(xMinhaRaquete, yMinhaRaquete, 
larguraRaquete, alturaRaquete);
//Mostra Raquete do Oponente à esquerda
fill(corRaqueteOponente);//COR
rect(xRaqueteOponente, yRaqueteOponente,
larguraRaquete, alturaRaquete); 
}

//Cenário - Bordas da tela
function verificaColisao(){
//Colisão Horizontal com bordas laterais
if (xBolinha + raio > largura || xBolinha - raio < 0){
//velocidadeX = velocidadeX * -1
velocidadeX *= -1;
}
//Colisão Vertical com bordas superior e inferior
if (yBolinha + raio > altura || yBolinha - raio < 0){
velocidadeY *= -1;
}
}

function movimentaBolinha(){
  if(frameCount>300){
 
//Velocidade Horizontal
xBolinha += velocidadeX;//Incremento de X
//Velocidade Vertical
yBolinha += velocidadeY;//Incremento de Y
}
 }
function mostraBolinha(){
noStroke();
fill(corBolinha);
circle(xBolinha,yBolinha,diametro);
}

