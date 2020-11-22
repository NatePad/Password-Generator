var generateBtnEl = document.querySelector('#generate-btn');
var copyBtnEl = document.querySelector('#copy-btn');
var newPassEl = document.querySelector('#new-password-textbox');

function init() {
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
  var capitalStr = lowercaseStr.toUpperCase();
  var numberStr = '0123456789';
  var specialCharStr = '`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?';

  // Let's make an array of objects to help organize things a bit:
  var arrayOfObjects = [

    // arrayOfObjects[0]
    {
      // arrayOfObjects[0].chars
      chars: lowercaseStr,
      // arrayOfObjects[0].enabled
      enabled: document.querySelector('#lowercase-checkbox').checked
    },

    // arrayOfObjects[1]
    {
      // arrayOfObjects[1].chars
      chars: capitalStr,
      // arrayOfObjects[1].enabled
      enabled: document.querySelector('#capital-checkbox').checked
    },

    // arrayOfObjects[2]
    {
      // arrayOfObjects[2].chars
      chars: numberStr,
      // arrayOfObjects[2].enabled
      enabled: document.querySelector('#number-checkbox').checked
    },

    // arrayOfObjects[3]
    {
      // arrayOfObjects[3].chars
      chars: specialCharStr,
      // arrayOfObjects[3].enabled
      enabled: document.querySelector('#spec-char-checkbox').checked
    }
  ];

  var passLength = document.querySelector('#length-input').value;
  var newPassword = '';

  var selectedCharArr = [];

  // Based on how our array is structured, we can
  // rewrite the below for loop using the
  // array.forEach() method. We'll do that in the
  // next step.
  for (var i = 0; i < arrayOfObjects.length; i++) {
    if (arrayOfObjects[i].enabled)
      selectedCharArr.push(arrayOfObjects[i].chars);
  }

  console.log('Logging selectedCharArr from lvl-5-object.js:');
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


  // Password Generation
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
