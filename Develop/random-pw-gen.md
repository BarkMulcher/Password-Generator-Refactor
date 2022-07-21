## window alert with pw options
//ended up going with prompt method instead of confirm
<script>
 //below link referenced for creating "prompt" (confirm() method)
 //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_confirm3
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

// vs 

function myFunction() {
  let text;
  if (confirm("Press a button!") == true) {
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
  var text = "Do you require your password to include Upper Case?\nClick OK for Yes, Cancel for No.";
   if (confirm(text) == true) {

   }
}
</script>
-------------------------------------------
# //Error messages:
<script>
  catch(err) {
  document.getElementById("demo").innerHTML = err;
}
</script>
// above script returns the error type and then the error syntax 
// ex: "ReferenceError: can't access lexical declaration 'carName' before initialization"
-----------------------------------------------------------

# // The for loop has the following syntax:

<script>
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
</script>

Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.

## Example
<script>
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

From the example above, you can read:

Statement 1 sets a variable before the loop starts (let i = 0).

Statement 2 defines the condition for the loop to run (i must be less than 5).

Statement 3 increases a value (i++) each time the code block in the loop has been executed.


-----------------------------------------------------------


## // defining and calling a function example
<script>
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}
</script>
-----------------------------------------------------------

The syntax for any Math method is: 
<script>
Math.method(number)
</script>
-----------------------------------------------------------

The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible. 

let a = 2;
let b = 'hello';

console.log(a += 3); // addition
// expected output: 5

console.log(b += ' world'); // concatenation
// expected output: "hello world"

-----------------------------------------------------------
ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
Example
{
  let x = 2;
}
// x can NOT be used here

Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.
Example
{
  var x = 2;
}
// x CAN be used here

-----------------------------------------------------------

Approach 1: Make a string consist of Alphabets(lowercase and uppercase), Numbers and Special Characters. 
Then we will use Math.random() and Math.floor() method to generate a number in between 0 and l-1(where l is length of 
string) (<-- using "let"). To get the character of the string of a particular index we can use .charAt() method. This will keep 
concatenating the random character from the string until the password of the desired length is obtained.

```
<!DOCTYPE HTML> 
<html>

<head>
	<title>
		Generate a Random Password
		using JavaScript
	</title>
</head>

<body style="text-align:center;">
	
	<h1 style="color: green">
		GeeksforGeeks
	</h1>
	
	<h3>
		Click on the button to
		generate random password.
	</h3>
	
	<button onclick="gfg_Run()">
		Click Here
	</button>
	<br>
	
	<div>
		<p id="geeks"></p>
	</div> 
</body>
</html>
```
	
<script>
		var blue42 = document.getElementById("pwgen");

		/* Function to generate combination of password */
		function generatePassword() {
			var password = '';
			var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
					'abcdefghijklmnopqrstuvwxyz0123456789@#$';
          var password = '';
  var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=' +
                'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=';
   //following is a loop - instead of typing:
    //password += string[1]
    //password += string[2]
    //password += string[3]
    //password += string[4]
    //password += string[5]
    //password += string[6]
    //password += string[7]
    //password += string[8] ?? idk something like above
    // "<=" is less than or equal to
    // so generated PW will be LTOET 8 characters (?)
  for (let i = 1; i <= 8; i++) {
    // Math.floor used below to generate integer, as random will generate a decimal
    var char = Math.floor(Math.random()
                  * string.length + 1);
    password += string.charAt(char)
  }
			
      return password;
	}

		function gfg_Run() {
			blue42.innerHTML = generateP();
	}
</script>
</body>
</html>
