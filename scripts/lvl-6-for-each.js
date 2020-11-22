var generateBtnEl = document.querySelector('#generate-btn');
var copyBtnEl = document.querySelector('#copy-btn');
var newPassEl = document.querySelector('#new-password-textbox');


function init() {
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
  var capitalStr = lowercaseStr.toUpperCase();
  var numberStr = '0123456789';
  var specialCharStr = '`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?';

  var passLength = document.querySelector('#length-input').value;
  var selectedCharArr = [];
  var newPassword = '';

  var arrayOfObjects = [
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


  arrayOfObjects.forEach(function (currentObject) {
    if (currentObject.enabled) {
      selectedCharArr.push(currentObject.chars);
    }
  });

  console.log('Logging selectedCharArr from lvl-6-for-each.js:');
  console.log(selectedCharArr);


  // Input Validation
  if (selectedCharArr.length === 0) {
    alert('Please check at least one type of character.');
    return;
  }

  if (passLength < 8 || passLength > 128) {
    alert('Please enter a password length from 8 to 128.');
    return;
  }


  // Password Creation
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharArr.length);
    var randomString = selectedCharArr[randomIndex];

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
