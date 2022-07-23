// // Assignment code here:


var generateBtn = document.querySelector("#generate");
var generate = document.getElementById("generate");
// eventListener for Generate Button:
generateBtn.addEventListener("click", writePassword);

// initiate password generate function:
function generatePassword() {

// declare

  // variables for confirm pop-ups w/ text:
var askUpperCase = window.confirm("Does your password require Upper Case?\nOK for Yes, Cancel for No");
var askLowerCase = window.confirm("Does your password require lower case?\nOK for Yes, Cancel for No"); 
var askSpecChar = window.confirm("Does your password require  special ch@racter$?\nOK for Yes, Cancel for No");
var askNum = window.confirm("Does your password require numbers?\nOK for Yes, Cancel for No");
var askLength = window.prompt("Please enter the number of characters required, between 8 & 128.")
  // create if/else loops 
  // later define specific PW functions
  if (askUpperCase && askLowerCase && askSpecChar && askNum && askLength) {
    generatePassAll(askLength);
  } else if (askLowerCase && askSpecChar && askNum && askLength) {
    generatePassNoUpperCase(askLength);
  } else if (askSpecChar && askNum && askLength) {
    generatePassNoLetter(askLength)
  }
  
  // this may need to go first?
  if (askLength < 8 || askLength > 128) {
  window.alert("Your password must be between 8 & 128 characters in length to proceed.");
    return generatePassword();
}

}

  

function generatePassword() {

  var password = "";
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=" +
                "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=";
  for (let i = 0; i < 128; i++) {
    var char = Math.floor(Math.random()
                  * string.length + 1);
    
    password += string.charAt(char)
    password = "AB" + string
  }

  return password;
}

function pwGen() {
  pwrd.innerHTML = generatePassword();

}





var pwCriteria = function() {
// would you like to include upper case?
  var userChoice1 = window.confirm("Do you require your password to include Upper Case?\nOK for Yes, Cancel for No");
    if (confirm(userChoice1) == false) {
      var userChoice2  
   } else (confirm(userChoice1) == true); {

// would you like to include lower case?
  var userChoice2 = window.confirm("Do you require your password to include lower case?\nOK for Yes, Cancel for No"); 
       if (confirm(userChoice2) == false); {

    }
    // would you like to include numbers?
  
 // would you like to include special characters?
  }
}

//PW generator function

var pwrd = document.getElementById("gen");

// used basic format from geeksforgeeks.com, which currently includes ALL optional PW criteria
// function declaration:
  function generatePassword() {
    var password = '';
    var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=' +
                  'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=';
    for (let i = 8; i <= 128; i++) {
      var char = Math.floor(Math.random()
                    * string.length + 1);
      password += string.charAt(char)
    }

    return password;
  }

  function pwGen() {
    pwrd.innerHTML = generatePassword();
  
}

// note: putting these items at the top of js file:
// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
/* <button id=**"generate"** class="btn">Generate Password</button> */

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


