const modal = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function openModal(button) {
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}" height="600" width="600" />
    <p>${desc}</p>
  `;
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

function handleWindowClick(e) {
  if (e.target.classList.contains('modal-outer')) {
    closeModal();
  } else if (e.target.tagName === 'BUTTON') {
    openModal(e.target);
  }
}

window.addEventListener('click', handleWindowClick);
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
