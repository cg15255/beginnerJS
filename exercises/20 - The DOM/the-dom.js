// const p = document.querySelector('p');
// console.log(p);
// const header = document.querySelector('h2');

// const pizzaList = document.querySelector('.pizza');
// // pizzaList.textContent += 'NICCEEE!';
// pizzaList.insertAdjacentText('beforeend', 'NICEEE');

// Classses
const pic = document.querySelector('.nice');

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute pup';

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});
