var generateBtnEl = document.querySelector('#generate-btn');
var copyBtnEl = document.querySelector('#copy-btn');
var newPassEl = document.querySelector('#new-password-textbox');


function init() {
  var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var capitalArr = [];
  var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharArr = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', "'", '"', ',', '.', '/', '<', '>', '?'];

  // Build capitalArr from lowercaseArr
  lowercaseArr.forEach(function(currentLetter) {
    capitalArr.push(currentLetter.toUpperCase());
  });

  var arrayOfObjects = [
    {
      chars: lowercaseArr,
      enabled: document.querySelector('#lowercase-checkbox').checked
    },
    {
      chars: capitalArr,
      enabled: document.querySelector('#capital-checkbox').checked
    },
    {
      chars: numberArr,
      enabled: document.querySelector('#number-checkbox').checked
    },
    {
      chars: specialCharArr,
      enabled: document.querySelector('#spec-char-checkbox').checked
    }
  ];

  var passLength = document.querySelector('#length-input').value;
  var selectedCharArr = [];
  var newPassword = '';

  arrayOfObjects.forEach(function (currentObject) {
    if (currentObject.enabled) {
      selectedCharArr.push(currentObject.chars);
    }
  });

  console.log('Logging selectedCharArr from lvl-6-with-arrays.js:');
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
    var randomCharType = selectedCharArr[randomIndex];

    var randomCharIndex = Math.floor(Math.random() * randomCharType.length);
    var newChar = randomCharType[randomCharIndex];

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
