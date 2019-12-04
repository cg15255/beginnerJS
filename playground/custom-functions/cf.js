// Function Definition
function calculateBill(billAmount, taxRate = 0.12, tipRate = 0.15) {
  // this is the function body
  return billAmount * (1 + taxRate + tipRate);
}

// Function Call. Or **Run**
const myTotal = calculateBill(100, 0.12);
console.log(`My total is $${myTotal.toFixed(2)}`);

// const firstName = 'Chris';

function sayHiTo(firstName) {
  return `hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, , 0.2);
console.log(myBill4);
