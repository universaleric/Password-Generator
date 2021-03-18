var generateBtn = document.querySelector("#generate");

function generatePassword() { // Created function generatePassword().
  let passLength;
  let lowercase;
  let uppercase;
  let numeric;
  let specChar;
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      alphabetUpper = alphabetUpper.split(''); // Declared variables and used .split() to create arrays.
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
      alphabet= alphabet.split('');
  let symbols = ["!","@","#","$","%","&","?"];
  let numbers = [1,2,3,4,5,6,7,8,9,0];
  let setOfChar = []; // This is used as the catch all array based on user input.
  let password = ""; // This is used for when the password is generated.

  passLength = prompt("Please enter the number of characters to use for your password.");
  passLength = parseInt(passLength); // This converts the inputed string to a number.
  console.log(passLength);
  if (isNaN(passLength) || 8 > passLength || passLength > 128){
    alert("Invalid Input"); // Set conditions to catch bad user input.
    return;
  }
  else {
    alert("The number of characters is " + passLength + ".");
  }

  lowercase = confirm("Do you want to use lowercase letters?"); // Used confirm() to create true/false values.
  if (lowercase == true){
    setOfChar = setOfChar.concat(alphabet); // If the confirm evaluated to true, setOfChar would concat the appropriate array.
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

  for (let i = 0; i < passLength; i++) { // Created a for loop to iterate over the length of characters selected by user.
    let charSelection = Math.floor(Math.random() * setOfChar.length); // Used the Math.floor(Math.random) method and the length of the new array to randomize a number.
    charSelection = setOfChar[charSelection]; // Once a number was selected, it was used within the newly created array to select a character.
    password = password.concat(charSelection); // A password was created by concatenating these character selections.
  }

  return password;

}

function writePassword() {
  let password = generatePassword(); // password used the generated password from the generatePassword() function.
  let passwordText = document.querySelector("#password"); // The password was then displayed in the textarea of the website.
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
