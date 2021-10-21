const form  = document.getElementsByTagName('form')[0];
const name = document.getElementById('name');
const nameError = document.querySelector('#name + span.error');
name.addEventListener('input', function (event) {
  
  if (name.validity.valid) {
    nameError.textContent = '';
    nameError.className = 'error';
  }else {
    showError();
  }
});
form.addEventListener('submit', function (event) {
  if(!name.validity.valid) {
    showError();
    event.preventDefault();
  }
});
function showError() {
  if(name.validity.valueMissing) {
    nameError.textContent = 'Name cannot be empty';
  } else if(name.validity.typeMismatch) {
    nameError.textContent = 'Entered value needs to be a name.';
  } else if(name.validity.tooShort) {
    nameError.textContent = `Name should be at least ${ name.minLength } characters; you entered ${ name.value.length }.`;
  }

  nameError.className = 'error active';
}

const lname = document.getElementById('lname');
const lnameError = document.querySelector('#lname + span.error');
lname.addEventListener('input', function (event) {
  
  if (lname.validity.valid) {
    lnameError.textContent = '';
    lnameError.className = 'error';
  }else {
    showError1();
  }
});
form.addEventListener('submit', function (event) {
  if(!lname.validity.valid) {
    showError1();
    event.preventDefault();
  }
});
function showError1() {
  if(lname.validity.valueMissing) {
    lnameError.textContent = 'Name cannot be empty';
  } else if(lname.validity.typeMismatch) {
    nameError.textContent = 'Entered value needs to be a name.';
  } else if(lname.validity.tooShort) {
    lnameError.textContent = `Name should be at least ${ lname.minLength } characters; you entered ${ lname.value.length }.`;
  }

  lnameError.className = 'error active';
}

const email = document.getElementById('mail')
    const emailError = document.querySelector('#mail + span.error')
    
    email.addEventListener('input', function (a) {
        if (email.validity.valid) {
          emailError.textContent = '';
        emailError.className = 'error';
        }else {
          showError2()
        }
    })
    form.addEventListener('submit', function (a) {
        if (!email.validity.valid) {
          showError2();
          a.preventDefault();
        }
    });
    function showError2() {
      if (email.validity.valueMissing) {
          emailError.textContent = 'Email cannot be empty';
      }else if (email.validity.typeMismatch) {
          emailError.textContent = 'Looks like this is not an email';
      }else if (email.validity.tooShorthort) {
          emailError.textContent = `Email needs to be ${ minLength } characters, you have entered ${ password.value.length } characters`;
      }
      emailError.className = 'error active';
    }
    
    const password = document.getElementById('password')
  const passwordError = document.querySelector('#password + span.error')
  
  password.addEventListener('input', function (event) {
      if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
      }else {
        showError3();
      }
    });
    
    form.addEventListener('submit', function (event) {
              if (!password.validity.valid) {
                showError3();
                event.preventDefault();
              }
          });
    function showError3() {
      if (password.validity.valueMissing) {
        passwordError.textContent = "Password cannot be empty"
      }else if (password.validity.typeMismatch) {
        passwordError.textContent = "Entered value needs to be a password"
      }else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${ password.minLength } characters, you have entered ${ password.value.length } charcters`
      }
      passwordError.className = 'error active';
    }
