let order = []
let clickedOrder = []
let score = 0

//0 - verde
//1 - vermelho
//2 - amaarelo
//3 -azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
//cria ordem aleatoria de cores
let shuuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElemente(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}
//acende a proxima cor
let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)

  setTimeout(() => {
    ElementInternals.classList.remove('selected')
  })
}
//checaa se os botoes  foram selecionados na ordem certa
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver()
      break
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
    nextLevel()
  }
}

//funcao para o clique do usuario
let click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElemente(color).classList.add('selected')

  setTimeout(() => {
    createColorElemente(color).classList.remove('selected')
    checkOrder();
  },250)

}

//funcao que retorna a cor
let createColorElemente = (color) => {
  if(color == 0){
    return green;
  }else if(color == 1){
    return red;
  }else if(color ==2){
    return yellow;
  }else if(color == 3){
    return blue;
  }
}

//funcao para proximo nivel
let nextLevel = () =>{
  score++;
  shuuffleOrder();
}

//funcao para game over
let gameOver =()=> {
  alert(`Pontuação: ${score}!\n Você perdeu o jogo!\nClique em Ok para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = ()  => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo');
  score = 0;

  nextLevel();
}


green.addEventListener('click',click(0))
red.addEventListener('click',click(1))
yellow.addEventListener('click',click(2))
blue.addEventListener('click',click(3))


//eventos de clicks
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
playGame();