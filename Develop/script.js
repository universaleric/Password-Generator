// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let passLength = 0;
let lowercase = true;
let uppercase = true;
let numeric = true;
let specChar = true;

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passLength = prompt("Please enter the number of characters to use for your password.");
  if (NaN(passLength)){
    alert("Invalid Input");
    return false;
  }
  else {
    alert("The number of characters is " + passLength + ".");
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
