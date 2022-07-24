// // Assignment code here:


// initiate password generate function:
function generatePassword() {

  // declare variables for sets of criteria:
  var strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var strLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var strSpecChar = "!@#$%^&*()-=";
  var strNum = "12345678990";
  const strTotal = "";

  // confirm pop-ups w/ text: 
  // create if/else loops 
askLength = window.prompt("Please enter the number of characters required, between 8 & 128.");
  if (askLength < 8 || askLength > 128) {
    window.alert("WRONG. 8 - 128 characters required to proceed.");
  } else if (isNaN(askLength)) { 
    return generatePassword();
  }
askUpperCase = window.confirm("Pop quiz, hotshot:\nDoes your password require Upper Case?\nOK for Yes, Cancel for No");
askLowerCase = window.confirm("Pop quiz, hotshot:\nDoes your password require lower case?\nOK for Yes, Cancel for No"); 
askSpecChar = window.confirm("Pop quiz, hotshot:\nDoes your password require  special ch@racter$?\nOK for Yes, Cancel for No");
askNum = window.confirm("Pop quiz, hotshot:\nDoes your password require numbers?\nOK for Yes, Cancel for No");

// check for at least one criteria
  if (askUpperCase === false && askLowerCase === false && askSpecChar === false && askNum === false);
    window.alert("Your password must have a criterion to proceed.");
    return generatePassword();
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

  for (let i = 0; i < 128; i++) {
    var char = Math.floor(Math.random()
                  * strTotal.length + 1);
    
    password += strTotal.charAt(char)
    password = "AB" + string
  }

  return password;


function pwGen() {
  pwrd.innerHTML = generatePassword();

}



  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function generatePassword() {

//   var password = "";
//   var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=" + // not this
//                 "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_="; // not this 
//  var strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  var strLowerCase = "abcdefghijklmnopqrstuvwxyz";
//  var strSpecChar = "!@#$%^&*()-=";
//  var strNum = "12345678990";
//  var strTotal = []; ?







var pwrd = document.getElementById("gen");


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
/* <button id=**"generate"** class="btn">Generate Password</button> */





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var generate = document.getElementById("generate");

// eventListener for Generate Button:
generateBtn.addEventListener("click", writePassword);
