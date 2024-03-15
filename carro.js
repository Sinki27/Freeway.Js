//codigo do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 100, 155, 215, 270, 320 ];
let velocidadeCarros = [3.4, 2.5, 3.5, 4.7, 2.3, 4.2];
let comprimentoCarro = 50; 
let alturaCarro = 30;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
     xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600
    }   
  }
}
function passouTodaATela(xCarro){
    return xCarro < - 45;
}