console.log('Ciao');

const itemsWrapper = document.querySelector('.items-wrapper');
const up = document.querySelector('.top');
const down = document.querySelector('.bottom');

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

for(let i = 0; i < images.length; i++){

    const image = images[i];

    itemsWrapper.innerHTML += `<img src="${image}" class= " w-100 h-100 object-fit-cover d-none item">`;
}

let counter = 0;

const itemsCollection = document.getElementsByClassName('item');

itemsCollection[counter].classList.remove('d-none');


up.addEventListener('click', function(){

    itemsCollection[counter].classList.add('d-none');

    counter++;

    itemsCollection[counter].classList.remove('d-none');

})


down.addEventListener('click', function(){

    itemsCollection[counter].classList.add('d-none');

    counter--;

    itemsCollection[counter].classList.remove('d-none');

})


