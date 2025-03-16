const btnElement = document.querySelector('.btn');

btnElement,addEventListener('mouseover', (event) => {
  const x = event.pageX - btnElement.offsetLeft; //vai buscar a coordenada x na pagina e subtrai a distancia entre essa coordenada e a borda esquerda do botão
  
  const y = event.pageY - btnElement.offsetTop; //vai buscar a coordenada y na pagina e subtrai a distancia entre essa coordenada e a borda do topo do botão

  btnElement.style.setProperty("--xPos", x + 'px'); //altera o valor da variavel criada acedendo ao style de .btn
  btnElement.style.setProperty("--yPos", y + 'px');
})