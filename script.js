const requisito1 = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.setAttribute('id', 'title');
  h1.innerText = 'Paleta de Cores';
  header.appendChild(h1);
  document.body.appendChild(header);
};

const requisito2 = () => {
  const rgbAleatorio = () => `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  const cores = ['black', rgbAleatorio(), rgbAleatorio(), rgbAleatorio()];
  const divCores = document.createElement('div');
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'color-palette');
  ul.style.display = 'flex';
  ul.style.listStyle = 'none';
  ul.style.gap = '10px';

  for (let index = 0; index < cores.length; index++) {
    const cor = cores[index];
    const li = document.createElement('li');
    const estilo = li.style;
    li.classList.add('color');
    estilo.backgroundColor = cor;

    if (estilo.backgroundColor === 'black') {
      li.classList.add('selected');
    }

    estilo.border = '1px solid black';
    estilo.height = '40px';
    estilo.width = '40px';

    ul.appendChild(li);
    divCores.appendChild(ul);
    document.body.appendChild(divCores);
  }
};

const requisito4 = (number) => {
  const ulPixels = document.createElement('ul');
  document.body.appendChild(ulPixels);
  ulPixels.setAttribute('id', 'pixel-board');
  for (let index = 0; index < number; index++) {
    const divPixels = document.createElement('div');
    divPixels.style.display = 'flex';
    ulPixels.appendChild(divPixels);
    for (let lindex = 0; lindex < number; lindex++) {
      const liPixels = document.createElement('li');
      liPixels.classList.add('pixel');
      divPixels.appendChild(liPixels);
    }
  }
};

const requisito7 = () => {
  const selectedColors = document.querySelectorAll('.color');
  for (const color of selectedColors) {
    color.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};

const requisito8 = () => {
  const pixels = document.querySelectorAll('.pixel');

  for (const pixel of pixels) {
    pixel.addEventListener('click', () => {
      const colorSelected = document.querySelector('.selected');
      pixel.style.backgroundColor = colorSelected.style.backgroundColor;
    });
  }
};

const requisito9 = () => {
  const ulPixel = document.querySelector('#pixel-board');
  const pixels = document.querySelectorAll('.pixel');
  const eraseButton = document.createElement('button');
  const divButtons = document.createElement('div');
  divButtons.setAttribute('id', 'div-buttons');
  eraseButton.innerHTML = 'Limpar';
  eraseButton.setAttribute('id', 'clear-board');
  divButtons.appendChild(eraseButton);
  document.body.insertBefore(divButtons, ulPixel);
  eraseButton.addEventListener('click', () => {
    for (const pixel of pixels) {
      pixel.style.backgroundColor = 'white';
    }
  });
};

const requisito10 = () => {
  const divButtons = document.querySelector('#div-buttons');
  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('id', 'board-size');
  input.setAttribute('min', '1');
  const botaoAumentar = document.createElement('button');
  botaoAumentar.setAttribute('id', 'generate-board');
  botaoAumentar.innerHTML = 'VQV';
  divButtons.appendChild(input);
  divButtons.appendChild(botaoAumentar);

  botaoAumentar.addEventListener('click', () => {
    if (input.value === '') {
      return alert('Board inválido!');
    } if (input.value < 5) { input.value = 5; }
    if (input.value > 50) { input.value = 50; }
    const ulPixel = document.querySelector('#pixel-board');
    ulPixel.remove();
    requisito4(input.value);
    requisito8();
  });
};

window.onload = () => {
  requisito1();
  requisito2();
  requisito4(5);
  requisito7();
  requisito8();
  requisito9();
  requisito10();
};
