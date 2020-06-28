class TelaInicial {
  constructor(){
    somEntrada.play();
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(45);
    text('As aventuras da', width / 2, height / 3);
    textSize(95);
    text('bruxinha Hipsta', width / 2, height / 5 * 3);
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}