//ator
let yAtor = 366;
let xAtor = 88;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}
function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor -= 3;
  }
  if (keyIsDown(83)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
  if (keyIsDown(65)){
    xAtor -= 3;
  }
  if (keyIsDown(68)){
    xAtor += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play(0,1,0.5);
        if(pontosMaiorQueZero()){
          meusPontos -= 1;
      }
    }
  }
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 366;
}