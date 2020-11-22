var generateBtnEl = document.querySelector('#generate-btn');
var copyBtnEl = document.querySelector('#copy-btn');
var newPassEl = document.querySelector('#new-password-textbox');

function init() {
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
  var capitalStr = lowercaseStr.toUpperCase();
  var numberStr = '0123456789';
  var specialCharStr = '`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?';

  var allCharArr = [
    lowercaseStr,
    capitalStr,
    numberStr,
    specialCharStr
  ];

  var userOptionsArr = [
    document.querySelector('#lowercase-checkbox').checked,
    document.querySelector('#capital-checkbox').checked,
    document.querySelector('#number-checkbox').checked,
    document.querySelector('#spec-char-checkbox').checked
  ];

  var passLength = document.querySelector('#length-input').value;
  var newPassword = '';

  // This following is a completely valid and functional way to give
  // numbers, letters, and special characters an equal chance of appearing,
  // but things are getting a little chaotic and unorganized.
  // Let's make this work then think about improvements.

  // Let's change our selectedChars from a string to an array of strings.
  // It will be formatted just like allCharArr,
  // but we're only going to add what the user has selected:
  var selectedCharArr = [];

  // Now we can build selectedCharArr from
  // allCharArr based on userOptionsArr
  for (var i = 0; i < allCharArr.length; i++) {
    if (userOptionsArr[i]) {
      selectedCharArr.push(allCharArr[i]);
    }
  }

  console.log('Logging selectedCharArr from lvl-4-equal-chances.js:');
  console.log(selectedCharArr);

  // Now we need to update our password generation below.


  // Input Validation
  if (selectedCharArr.length === 0) {
    alert('Please check at least one type of character.');
    return;
  }

  if (passLength < 8 || passLength > 128) {
    alert('Please enter a password length from 8 to 128.');
    return;
  }


  // Since we've changed selectedChars from a string to an array,
  // We need to change our password generation.
  for (var i = 0; i < passLength; i++) {

    // Grab a random string from the selectedCharArr
    var randomIndex = Math.floor(Math.random() * selectedCharArr.length);
    var randomString = selectedCharArr[randomIndex];

    // Grab a random character from the randomly chosen string
    var randomLocation = Math.floor(Math.random() * randomString.length);
    var newChar = randomString.charAt(randomLocation);

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
