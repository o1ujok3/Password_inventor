// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var characterChoices = [];

// Function to generate password with user input
function generatePassword() {
  var pass = "";

  /*
   * Present a series of prompts for password criteria
   * Length of password
   * At least 10 characters but no more than 64.
   * Character types
   * Lowercase
   * Uppercase
   * Numeric
   * Special characters ($@%&*, etc)
   * Code should validate for each input and at least one character type should be selected
   * */
  let passwordlength = window.prompt("Please enter your password length");
  if (passwordlength < 10 || passwordlength > 64) {
    window.alert("Password must be at least 10 characters but no more than 64");
    return " ";
  }
  let upperChoice = window.confirm(
    "Do you want to use upper-cased characters?"
  );
  let lowerChoice = window.confirm(
    "Do you want to use lower-cased characters?"
  );
  let numericChoice = window.confirm("Do you want to use numeric characters?");
  let specialChoice = window.confirm("Do you want to use special characters?");

  if (upperChoice) {
    characterChoices = characterChoices.concat(upperCasedCharacters);
  }

  if (lowerChoice) {
    characterChoices = characterChoices.concat(lowerCasedCharacters);
  }

  if (numericChoice) {
    characterChoices = characterChoices.concat(numericCharacters);
  }

  if (specialChoice) {
    characterChoices = characterChoices.concat(specialCharacters);
  }
  for (let i = 0; i < passwordlength; i++) {
    const randomIndex = Math.floor(Math.random() * characterChoices.length);
    let randomCharacter = characterChoices[randomIndex];
    pass += randomCharacter;
  }

  return pass;
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
