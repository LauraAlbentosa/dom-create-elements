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

  redButton.textContent = 'red';
  greenButton.textContent = 'green';

  divWithButtons.classList.add('div');

  divWithButtons.append(redButton);
  divWithButtons.append(greenButton);
  document.body.append(divWithButtons);

  const red = () => {
    divWithButtons.classList.remove('green');
    divWithButtons.classList.add('red');
  };

  const green = () => {
    divWithButtons.classList.remove('red');
    divWithButtons.classList.add('green');
  };

  redButton.addEventListener('click', red);
  greenButton.addEventListener('click', green);
};

//createDiv();

//- Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.


const generateRandomNumber = () => {
  const randomNumbers = [];
  for (let i = 0; i < 25; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }

  return randomNumbers
};



//console.log(randomNumbers);

//- Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.

const createEvenOddList = () => {
  const fragment = document.createDocumentFragment();
  const evensList = document.createElement('ul');
  const oddsList = document.createElement('ul');
  const randomNumbers = generateRandomNumber();

  randomNumbers.forEach(number => {
    let numberList = document.createElement('li');
    numberList.textContent = number;
    if (number % 2 === 0) {
      evensList.append(numberList);
    } else {
      oddsList.append(numberList);
    }
  });

  fragment.append(evensList, oddsList);
  document.body.append(fragment);
};

//createEvenOddList();

/*- Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:
  - El texto tiene X caracteres.
  - El texto tiene X vocales.
  - El texto tiene X consonantes.
  - Has introducido X espacios
*/

const inputTextElement = document.getElementById('input3');
const listElement = document.getElementById('list-input');



const countTestCharactes = () => {
  const vowels = 'aeiou';
  let countVowels = 0;
  let countConsonants = 0;
  let countSpaces = 0;

  const fragment = document.createDocumentFragment();
  const charactersTotal = document.createElement('li');
  const vowelsTotal = document.createElement('li');
  const consonantsTotal = document.createElement('li');
  const spacesTotal = document.createElement('li');

  for (const character of inputTextElement.value) {
    if (vowels.includes(character)) {
      countVowels++;
    } else if (character.charCodeAt() === 32) {
      countSpaces++;
    } else {
      countConsonants++;
    }
  }

  charactersTotal.textContent = `El texto tiene ${inputTextElement.value.length} caracteres`;
  vowelsTotal.textContent = `El texto tiene ${countVowels} vocales`;
  consonantsTotal.textContent = `El texto tiene ${countConsonants} consonantes`;
  spacesTotal.textContent = `Has introducido ${countSpaces} espacios`;

  listElement.textContent = ''
  fragment.append(charactersTotal, vowelsTotal, consonantsTotal, spacesTotal);
  listElement.append(fragment);
};


inputTextElement.addEventListener('input', countTestCharactes);

//- Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

const buttonNumberElement = document.getElementById('button-mult');
const numberInputElement = document.getElementById('input-number');
const listMultiply = document.getElementById('multiply-list');

const acceptNumber = () => {
  buttonNumberElement.disabled = false;
  if (numberInputElement.value <= 0 ) {
    buttonNumberElement.disabled = true;
  }

  return numberInputElement.value
};

numberInputElement.addEventListener('input', acceptNumber);
const multiply = () => {
  const fragment = document.createDocumentFragment()
  const number = acceptNumber()

  for (let i = 0; i<=10; i++){
    let newElement = document.createElement('li')
    newElement.textContent = `${number} x ${i}: ${number*i} `
    //console.log(newElement.textContent)
    fragment.append(newElement)
  }

  listMultiply.textContent = '';
  listMultiply.append(fragment)

};

buttonNumberElement.addEventListener('click', multiply)


//- Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM


const USERS = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];

const createCard = () =>{
  const fragment = document.createDocumentFragment()
  for ( const user of USERS){
    const divCard = document.createElement('div')
    const nameElement = document.createElement('span')
    nameElement.textContent = user.name
    const ageElement = document.createElement('span')
    ageElement.textContent = user.age
    const userNameElement = document.createElement('span')
    userNameElement.textContent = user.username
    const emailElement = document.createElement('span')
    emailElement.textContent = user.email
    const profileImageElement = document.createElement('img')
    profileImageElement.textContent = user.profileImage
    divCard.classList.add('card')

    divCard.append(nameElement)
    divCard.append(ageElement)
    divCard.append(userNameElement)
    divCard.append(emailElement)
    divCard.append(profileImageElement)

    fragment.append(divCard)
  }

  document.body.append(fragment)
}

createCard()
