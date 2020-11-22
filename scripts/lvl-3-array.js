var generateBtnEl = document.querySelector('#generate-btn');
var copyBtnEl = document.querySelector('#copy-btn');
var newPassEl = document.querySelector('#new-password-textbox');

function init() {
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
  var capitalStr = lowercaseStr.toUpperCase();
  var numberStr = '0123456789';
  var specialCharStr = '`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?';

  // What if we were to convert our available characters into an array where:
  var allCharArr = [
    // allCharArr[0] is a string of lowercase letters:
    lowercaseStr,
    // allCharArr[1] is a string of capital letters:
    capitalStr,
    // allCharArr[2] is a string of numbers:
    numberStr,
    // allCharArr[3] is a string special characters:
    specialCharStr
  ];

  // And now we can build our userOptionsArr to match, where:
  var userOptionsArr = [
    // userOptionsArr[0] might utilize lowercase letters:
    document.querySelector('#lowercase-checkbox').checked,
    // userOptionsArr[1] might utilize capital letters:
    document.querySelector('#capital-checkbox').checked,
    // userOptionsArr[2] might utilize numbers:
    document.querySelector('#number-checkbox').checked,
    // userOptionsArr[3] might utilize special characters:
    document.querySelector('#spec-char-checkbox').checked
  ];

  var passLength = document.querySelector('#length-input').value;
  var selectedChars = '';
  var newPassword = '';

  // Now let's take a different approach to those if statements:
  for (var i = 0; i < allCharArr.length; i++) {
    if (userOptionsArr[i]) {
      selectedChars = selectedChars.concat(allCharArr[i]);
    }
  }

  console.log('Logging selectedChars from lvl-3-array.js:');
  console.log(selectedChars);

  // Our next improvement will be to give each type of
  // character an equal chance of getting randomly selected.


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
