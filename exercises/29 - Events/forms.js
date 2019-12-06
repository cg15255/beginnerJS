const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  const shouldChangePage = confirm('This website might be malicious! Do you wish to proceed?');
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
  const name = e.currentTarget.name.value.toLowerCase();
  if (name.includes('chad')) {
    alert('sorry bro');
    e.preventDefault();
  }
});

function logEvent(e) {
  //   console.count(e.type);
  console.log(e.currentTarget.value);
}

// signupForm.name.addEventListener('keyup', logEvent);
// signupForm.name.addEventListener('keydown', logEvent);

function handlePhotoClick(e) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked the photo');
  }
}

const photo = document.querySelector('.photo');

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
