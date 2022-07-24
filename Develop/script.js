// // Assignment code here:
  
function generatePassword() {
 
  // declare variables for sets of criteria:
  var strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var strLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var strSpecChar = "!@#$%^&*()-=";
  var strNum = "12345678990";
  var strTotal = "";

  
  // declare prompts w/ text: 
  // create if/else loops 
  var askLength = window.prompt("Please enter the number of characters required, between 8 & 128.");
    if (askLength < 8 || askLength > 128) {
      window.alert("WRONG. 8 - 128 characters required to proceed.");
    } else if (isNaN(askLength)) {
      generatePassword();
    }
  var askUpperCase = window.confirm("Pop quiz, hotshot:\nDoes your password require Upper Case?\nOK for Yes, Cancel for No");
  var askLowerCase = window.confirm("Pop quiz, hotshot:\nDoes your password require lower case?\nOK for Yes, Cancel for No"); 
  var askSpecChar = window.confirm("Pop quiz, hotshot:\nDoes your password require  special ch@racter$?\nOK for Yes, Cancel for No");
  var askNum = window.confirm("Pop quiz, hotshot:\nDoes your password require numbers?\nOK for Yes, Cancel for No");

// check for at least one criteria:
  if (askUpperCase != true && askLowerCase != true && askSpecChar != true && askNum != true) {
    // notify user of need for criteria:
    window.alert("Your password must have a criterion to proceed.");
    generatePassword(); 
  }
 
// create string combinations:
  if (askUpperCase) {
    strTotal = strTotal.concat(strUpperCase);
  }
  if (askLowerCase) {
  strTotal = strTotal.concat(strLowerCase);
  }
  if (askSpecChar) {
    strTotal = strTotal.concat(strSpecChar);
  }
  if (askNum) {
    strTotal = strTotal.concat(strNum);
  }


  var password = "";       

  for (let i = 0; i < askLength; i++) {
    var pw = [Math.floor(Math.random() * strTotal.length)]; 
    password += strTotal.charAt(pw);
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// eventListener for Generate Button:
generateBtn.addEventListener("click", writePassword);
// initiate password generate function:
