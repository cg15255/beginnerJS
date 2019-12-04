// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// console.log(doctorize('Chris'));

// // Function Declaration
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// // Function Expression
// const doctorize2 = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// const inchesToCM = inches => inches * 2.54;

// const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

// (function(age) {
//   console.log('running the Anon function');
//   return `You are cool and age: ${age}`;
// })(10)

// Methods!!
const wes = {
  name: 'Wes Bos',
  // Method
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSS!');
  },
  // Arrow Function
  whisperHi: () => {
    console.log('hiii wess im a mouse');
  },
};

// Callback functions
// Click callback

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}
button.addEventListener('click', function() {
  console.log('niccceeee jobbb!');
});

// Timer callback
setTimeout(function() {
  console.log('runnnninnngggg!');
}, 1000);
