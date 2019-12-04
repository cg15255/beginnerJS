const item = document.querySelector('.item');

const src = 'https://picsum.photos/200';
const desc = `Cute Pup`;

const myHTML = `
    <div class="wrapper">
        <h2>Cute Pup</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
