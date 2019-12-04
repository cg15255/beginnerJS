const myParagraph = document.createElement('p');
myParagraph.innerText = 'I am a paragraph';

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh shoot! we need to add a heading to the top!

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';
const li4 = document.createElement('li');
li4.textContent = 'four';
const li5 = document.createElement('li');
li5.textContent = 'five';

ul.appendChild(li3);
ul.appendChild(li5);
li5.insertAdjacentElement('beforebegin', li4);
li3.insertAdjacentElement('beforebegin', li1);
li1.insertAdjacentElement('afterend', li2);

document.body.appendChild(ul);
