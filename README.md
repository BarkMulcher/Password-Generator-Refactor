### Decisions

Our assignment was to take the current non-functional password generation page and re-factor it so that it works. The page did not originally have a function for password generation. It did include the querySelector for the #generate id, as well as the eventListener for click functionality.

Learning more about prompt(), confirm(), and alert() methods was paramount. I learned the distinction in their purposes, and had to decide the best fit for the context. Prompt() required input and room for user error, so I thought it best to limit its use. I chose confirm() for the majority of criteria prompts, then ended up using all three methods in my code. I also *really* wanted the user to be able to end the process by clicking away from these pop-ups. Ultimately, I could not find a way to do this in the assignment's time frame, but I wish to incorporate this functionality in the future.

Many examples of password generators utilized arrays, but I am trying to use a string for each possible set of criteria.







# Password Generator Starter Code
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page