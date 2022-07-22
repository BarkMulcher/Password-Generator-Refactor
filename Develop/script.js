// Assignment code here:

var userChoice1 = window.confirm("Do you require your password to include Upper Case?\nOK for Yes, Cancel for No");

var userChoice2 = window.confirm("Do you require your password to include lower case?\nOK for Yes, Cancel for No"); 

var userChoice3 = window.confirm("Do you require your password to include numbers?\nOK for Yes, Cancel for No");

var userchoice4 = window.confirm("Do you require your password to include special characters?\nOK for Yes, Cancel for No")
// ^ the above ^ variable declarations need to be added to PW gen code below
// following is basic format from geeksforgeeks.com, which currently includes ALL optional PW criteria
// function declaration:

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
  var 
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
<button id="generate" class="btn">Generate Password</button>
