// Assignment Code
let generateBtn = document.querySelector("#generate");

// Variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "~`!#$%^&*+=-[]\\',;/{}|\":<>?";
var characters = "";
var password = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Concatenate user's selected characters to string
function generatePassword() {
  passwordLength = prompt("Choose your password length, between 8 and 128 characters");
  console.log(passwordLength !== null);
  if (passwordLength !== null) {
    while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("You must choose a number between 8 and 128!");
      passwordLength = parseInt(
        prompt("Choose your password length, between 8 and 128 characters")
      );
    }
    confirmLower = confirm("Do you want lowercase letters?");
    confirmUpper = confirm("Do you want UPPERCASE letters?");
    confirmNumeric = confirm("Do you want numbers?");
    confirmSpecial = confirm("Do you want special characters?");
    while (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
      alert("You must select at least one character type!");
      confirmLower = confirm("Do you want lowercase letters?");
      confirmUpper = confirm("Do you want UPPERCASE letters?");
      confirmNumeric = confirm("Do you want numbers?");
      confirmSpecial = confirm("Do you want special characters?");
    }
  }
  let characters = "";
  if (confirmLower) {
    characters += lowercase;
  } 
  if (confirmUpper) {
    characters += uppercase;
  }
  if (confirmNumeric) {
    characters += numeric;
  }
  if (confirmSpecial) {
    characters += special;
  }

  // Generates random password from users strings
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Event listeners on generate button
generateBtn.addEventListener("click", writePassword);