const buttons = document.querySelectorAll('.buy');

function handleClick() {
  console.log('IT WORKED');
}

function handleBuyClick(e) {
  // e.target will give you the actual element that got clicked
  // e.currentTarget gives you the element the event was fired on
  console.log('You clicked a button');
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   console.log(e.target === e.currentTarget);
  //   Stop this event from bubbling up
  //   event.stopPropagation();
}

window.addEventListener(
  'click',
  () => {
    console.log('YOU CLICKED THE WINDOW');
  },
  { capture: true }
);
buttons.forEach(button => button.addEventListener('click', handleBuyClick));

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(e) {
  console.log(this);
});
