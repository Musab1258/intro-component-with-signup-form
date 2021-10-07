/*function alterPage() {
   document.getElementsByTagName('form').addEventListener('submit', alert('wow'))
}*/

function validate() {
  document.getElementsByTagName('form').addEventListener('submit', validateForm())
}

const validateForm = function validateForm1() {
  const falt = document.getElementByClassName(form-input).innerHTML;
  if (falt == "") {
    alert('no');
  }
}

/*const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});
/*function alterPage() {
   document.getElementById('free-trial2').addEventListener('click', alert('wow'))
}

document.getElementById('me').textContent = 'me';
//alterPage('wow');

/*function validate() {
  document.getElementByTagName('form').addEventListener('submit', 

/*function validate() {
  alert('local man cannot can')
}*/