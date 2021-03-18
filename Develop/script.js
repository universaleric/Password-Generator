// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  let passLength;
  let lowercase;
  let uppercase;
  let numeric;
  let specChar;
  let alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let symbols = ["!","@","#","$","%","&","?"];
  let numbers = [1,2,3,4,5,6,7,8,9,0];
  let setOfChar = [];
  let password = "";

  passLength = prompt("Please enter the number of characters to use for your password.");
  passLength = parseInt(passLength);
  console.log(passLength);
  if (isNaN(passLength) || 8 > passLength || passLength > 120){
    alert("Invalid Input");
    return;
  }
  else {
    alert("The number of characters is " + passLength + ".");
  }

  lowercase = confirm("Do you want to use lowercase letters?");
  if (lowercase == true){
    setOfChar = setOfChar.concat(alphabet);
    console.log(setOfChar);
  }
  uppercase = confirm("Do you want to use uppercase letters?");
  if (uppercase == true){
    setOfChar = setOfChar.concat(alphabetUpper);
    console.log(setOfChar);
  }
  specChar = confirm("Do you want to use symbols?");
  if (specChar == true){
    setOfChar = setOfChar.concat(symbols);
    console.log(setOfChar);
  }
  numeric = confirm("Do you want to use numbers?");
  if (numeric == true){
    setOfChar = setOfChar.concat(numbers);
    console.log(setOfChar);
  }

  
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
