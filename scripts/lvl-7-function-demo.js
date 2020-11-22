var generateBtnEl = document.querySelector('#generate-btn');
var copyBtnEl = document.querySelector('#copy-btn');
var newPassEl = document.querySelector('#new-password-textbox');


function getArrayOfObjects() {
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
  var capitalStr = lowercaseStr.toUpperCase();
  var numberStr = '0123456789';
  var specialCharStr = '`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?';

  var objArr = [
    {
      chars: lowercaseStr,
      enabled: document.querySelector('#lowercase-checkbox').checked
    },
    {
      chars: capitalStr,
      enabled: document.querySelector('#capital-checkbox').checked
    },
    {
      chars: numberStr,
      enabled: document.querySelector('#number-checkbox').checked
    },
    {
      chars: specialCharStr,
      enabled: document.querySelector('#spec-char-checkbox').checked
    }
  ];

  return objArr;
}


function getArrayOfCharsToUse(objArr) {
  var charArr = [];

  objArr.forEach(function (currentObject) {
    if (currentObject.enabled) {
      charArr.push(currentObject.chars);
    }
  });

  return charArr;
}


function validateInput(passLength, charArr) {

  if (charArr.passLength === 0) {
    alert('Please check at least one type of character.');
    return false;
  }

  if (passLength < 8 || passLength > 128) {
    alert('Please enter a password length from 8 to 128.');
    return false;
  }

  return true;
}


function createNewPasswordString(passLength, charArr) {
  var newPassword = '';

  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * charArr.length);
    var randomString = charArr[randomIndex];

    var randomLocation = Math.floor(Math.random() * randomString.length);
    var newChar = randomString.charAt(randomLocation);

    newPassword = newPassword.concat(newChar);
  }

  return newPassword;
}


function init() {
  var objArr = getArrayOfObjects();
  var charArr = getArrayOfCharsToUse(objArr);
  var passLength = document.querySelector('#length-input').value;

  console.log('Logging charArr from the main function in lvl-7-function-demo.js:');
  console.log(charArr);

  var valInput = validateInput(passLength, charArr);
  if (!valInput) return;

  var newPassStr = createNewPasswordString(passLength, charArr);

  newPassEl.value = newPassStr;
}


generateBtnEl.addEventListener('click', function () {
  init();
});

copyBtnEl.addEventListener('click', function () {
  newPassEl.select();
  document.execCommand('copy');
  alert('Your new password has been copied to your clipboard.');
});
