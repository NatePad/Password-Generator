var generateBtnEl = document.querySelector('#generate-btn');
var copyBtnEl = document.querySelector('#copy-btn');
var newPassEl = document.querySelector('#new-password-textbox');

function init() {

  // While our entry level code is good, there
  // is some redundant code. Let's see
  // if we can clean that up some.

  // Also, it would be nice to give each
  // different type of character (letters, numbers,
  // and special characters) an equal
  // chance of appearing.

  // Let's start by organizing our code and
  // putting our variables at the top.

  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
  var capitalStr = lowercaseStr.toUpperCase();
  var numberStr = '0123456789';
  var specialCharStr = '`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?';

  var useLowers = document.querySelector('#lowercase-checkbox').checked;
  var useCaps = document.querySelector('#capital-checkbox').checked;
  var useNums = document.querySelector('#number-checkbox').checked;
  var useSpecChars = document.querySelector('#spec-char-checkbox').checked;

  var passLength = document.querySelector('#length-input').value;
  var selectedChars = '';
  var newPassword = '';

  // Now that our code is a bit more organized, let's think about how
  // we can elimate the redundant if statements below

  if (useLowers) {
    selectedChars = selectedChars.concat(lowercaseStr);
  }

  if (useCaps) {
    selectedChars = selectedChars.concat(capitalStr);
  }

  if (useNums) {
    selectedChars = selectedChars.concat(numberStr);
  }

  if (useSpecChars) {
    selectedChars = selectedChars.concat(specialCharStr);
  }

  console.log('Logging selectedChars from lvl-2-organized.js:');
  console.log(selectedChars);


  // Input Validation
  if (selectedChars === '') {
    alert('Please check at least one type of character.');
    return;
  }

  if (passLength < 8 || passLength > 128) {
    alert('Please enter a password length from 8 to 128.');
    return;
  }


  // Password Creation
  for (var i = 0; i < passLength; i++) {
    var randomLocation = Math.floor(Math.random() * selectedChars.length);
    var newChar = selectedChars.charAt(randomLocation);
    newPassword = newPassword.concat(newChar);
  }

  newPassEl.value = newPassword;
}

generateBtnEl.addEventListener('click', function () {
  init();
});

copyBtnEl.addEventListener('click', function () {
  newPassEl.select();
  document.execCommand('copy');
  alert('Your new password has been copied to your clipboard.');
});
