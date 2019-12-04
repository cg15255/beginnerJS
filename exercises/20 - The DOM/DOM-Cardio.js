// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'two';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
ul.appendChild(li3);

// put that list into the above wrapper
myDiv.appendChild(ul);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = `https://picsum.photos/500`;
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div>
        <p></p>
        <p></p>
    </div>
`;
// put this div before the unordered list from above
ul.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
myDiv.children[0].children[1].classList.add('warning');

// remove the first paragraph
myDiv.querySelector('p').remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  // have that function return html that looks like this:
  return `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button>DELETE</button>
  </div>`;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
const card1 = generatePlayerCard('Chris', 29, `5'8"`);
const card2 = generatePlayerCard('Lauren', 25, `5'6"`);
const card3 = generatePlayerCard('Jemma', 1.5, `20"`);
const card4 = generatePlayerCard('Zack', 14, `24"`);

// append those cards to the div
cards.innerHTML += card1;
cards.innerHTML += card2;
cards.innerHTML += card3;
cards.innerHTML += card4;
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const btns = document.querySelectorAll('button');
// select all the buttons!
// make out delete function
function handleDelete(e) {
  e.target.parentElement.remove();
}
// loop over them and attach a listener
btns.forEach(btn => btn.addEventListener('click', handleDelete));
