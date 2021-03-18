var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passLength;
  let lowercase;
  let uppercase;
  let numeric;
  let specChar;
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      alphabetUpper = alphabetUpper.split('');
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
      alphabet= alphabet.split('');
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

  for (let i = 0; i < passLength; i++) {
    let charSelection = Math.floor(Math.random() * setOfChar.length);
    charSelection = setOfChar[charSelection];
    password = password.concat(charSelection);
  }

  return password;

}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
