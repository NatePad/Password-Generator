function init() {
  var passLength = document.querySelector('#length-input').value;
  var selectedChars = '';
  var newPassword = '';

  if (document.querySelector('#lowercase-checkbox').checked === true) {
    // Add to string option 1:
    selectedChars = selectedChars + 'abcedfghijklmnopqrstuvwxyz';
  }

  // It is redundant to say if (true === true)
  // Instead, we can just say if (true)
  if (document.querySelector('#capital-checkbox').checked) {
    // Add to string option 2:
    selectedChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (document.querySelector('#number-checkbox').checked) {
    // Add to string option 3, use the string.concat() method.
    selectedChars = selectedChars.concat('0123456789');
  }


  if (document.querySelector('#spec-char-checkbox').checked) {
    selectedChars = selectedChars.concat('`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?');
  }

  console.log('Logging selectedChars from lvl-1-string-script.js:');
  console.log(selectedChars);


  // Input Validation
  // If nothing has been added to selectedChars,
  // then nothing has been selected.
  if (selectedChars === '') {
    alert('Please check at least one type of character.');
    return;
  } else if (passLength < 8 || passLength > 128) {
    alert('Please enter a password length from 8 to 128.');
    return;
  }


  // Password Creation
  for (var i = 0; i < passLength; i++) {
    var randomLocation = Math.floor(Math.random() * selectedChars.length);
    var newChar = selectedChars.charAt(randomLocation);
    newPassword = newPassword.concat(newChar);
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
