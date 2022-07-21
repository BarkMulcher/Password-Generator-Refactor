// Assignment code here

//window alert with pw options
// below link referenced for creating "prompt" (confirm() method)
 //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
 // would you like to include upper case
 // examples from W3:
 function myFunction() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}

 // would you like to include lower case
 // would you like to include numbers
 // would you like to include special characters?

function pwCriteria() {
  var text = window.confirm("Do you require your password to include Upper Case?\nOK for Yes, Cancel for No");
   if (!text) {
    return;
   }
   if (confirm(text) == true) {
    //make pwCriteria() run again??
    // do i need to use for loop?
   }
}

//PW generator function

var pwrd = document.getElementById("gen");

//function declaration:
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
