// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//- Usando cualquiera de los tres HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de qué HTML hayas elegido

const buttonElement = document.getElementById('button');
const lisElement = document.getElementById('ul');
let count = 1;

const addItem = () => {
  count++;
  const newItem = document.createElement('li');
  newItem.textContent = 'Item ' + count;
  lisElement.append(newItem);
};

buttonElement.addEventListener('click', addItem);

//- Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3, si elijes un 5 un h5 y así para todos.

const buttonTitleElement = document.getElementById('button2');
const rangeElement = document.getElementById('range');
const labelElement = document.getElementById('label');

const changeLabel = () => {
  labelElement.textContent = rangeElement.value;
};

rangeElement.addEventListener('input', changeLabel);

const addTitle = () => {
  const range = rangeElement.value;
  const newTitle = document.createElement('h' + range);
  newTitle.textContent = 'h' + range;
  document.body.append(newTitle);
};

buttonTitleElement.addEventListener('click', addTitle);

//- Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

const sendButtonElement = document.getElementById('button3');
const textInfo = document.getElementById('text');
const authorInfo = document.getElementById('author');

const createPost = event => {
  event.preventDefault();

  const newDiv = document.createElement('div');
  const newText = document.createElement('p');
  const author = document.createElement('span');

  newText.textContent = textInfo.value;
  author.textContent = 'Author: ' + authorInfo.value;

  newDiv.append(author);
  newDiv.append(newText);
  document.body.append(newDiv);
};

sendButtonElement.addEventListener('click', createPost);

//- Crea una función que genere un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.

const createDiv = () => {
  const divWithButtons = document.createElement('div');
  const redButton = document.createElement('button');
  const greenButton = document.createElement('button');

  redButton.textContent = 'red'
  greenButton.textContent = 'green'

  divWithButtons.classList.add('div')

  divWithButtons.append(redButton);
  divWithButtons.append(greenButton);
  document.body.append(divWithButtons);

  const red = () =>{
    divWithButtons.classList.remove('green')
    divWithButtons.classList.add('red')
  }

  const green = () =>{
    divWithButtons.classList.remove('red')
    divWithButtons.classList.add('green')
  }

  redButton.addEventListener('click', red)
  greenButton.addEventListener('click', green)
};

createDiv()

