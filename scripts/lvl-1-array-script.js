function init() {
  var passLength = document.querySelector('#length-input').value;
  var selectedCharArr = [];
  var newPassword = '';

  if (document.querySelector('#lowercase-checkbox').checked === true) {
    selectedCharArr.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  }

  // It is redundant to say if (true === true)
  // Instead, we can just say if (true)
  if (document.querySelector('#capital-checkbox').checked) {
    selectedCharArr.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  }

  if (document.querySelector('#number-checkbox').checked) {
    selectedCharArr.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  }

  if (document.querySelector('#spec-char-checkbox').checked) {
    selectedCharArr.push('`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', "'", '"', ',', '.', '/', '<', '>', '?');
  }

  console.log('Logging selectedCharArr from lvl-1-array-script.js:');
  console.log(selectedCharArr);


  // Input Validation
  // If nothing has been added to selectedCharArr,
  // then nothing has been selected.
  if (selectedCharArr.length === 0) {
    alert('Please check at least one type of character.');
    return;
  } else if (passLength < 8 || passLength > 128) {
    alert('Please enter a password length from 8 to 128.');
    return;
  }


  // Password Creation
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharArr.length);
    var newChar = selectedCharArr[randomIndex];
    newPassword = newPassword + newChar;
  }

  document.querySelector('#new-password-textbox').value = newPassword;
}

document.querySelector('#generate-btn').addEventListener('click', function () {
  init();
});

document.querySelector('#copy-btn').addEventListener('click', function () {
  document.querySelector('#new-password-textbox').select();
  document.execCommand('copy');
  alert('Your new password has been copied to your clipboard.');
});
