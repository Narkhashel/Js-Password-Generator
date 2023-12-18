// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  let  passLength = +prompt('Plese type number of chacarcters, you would like to your password to include. It have to be a number between 8 and 128.');

  if (typeof passLength === 'number' && passLength >= 8 && passLength <= 128) {

    let lowerCaseConf = confirm('Would you like to use lower casses?');
    let upperCaseConf = confirm('Would you like to use upper casses?');
    let numbersConf = confirm('Would you like to use numbers?');
    let choseSpecialConf = confirm('Would you like to use special characters?');
    let userChoices = [passLength, lowerCaseConf, upperCaseConf, numbersConf, choseSpecialConf];

    // veryfication that user chose at least one option,
    // to provide data for generatePassword function.
    if (userChoices[1] === false && userChoices[2] === false && userChoices[3] === false && userChoices[3] === false) {
      alert('You must use, at least one of the presented options. Try Again.');
      return false;
    }    
    return userChoices;
    }
    
    // Pop up for user when they provided wrong number od character
    else {
      alert('Please try puting a number beetwen 8 and 128.');
      return false;
    }  
  }


// Function for getting a random element from an array
function getRandom(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}


// Function to generate password with user input
function generatePassword() {
  let userInput = getPasswordOptions();

  // If statment to stop the code from progresing further. 
  // Fixes error when user choses neither of the options.
  if (userInput === false) {
    return '';
  }
  let passwordArr = [];
  let password = '';

  //Confiramtion included with the password for diffrent characters. 
  //Adds one element when chosen 
  if (userInput[1]) {
    passwordArr.push(lowerCasedCharacters);
    password += getRandom(lowerCasedCharacters);
  }

  if (userInput[2]) {
    passwordArr.push(upperCasedCharacters);
    password += getRandom(upperCasedCharacters);
  }

  if (userInput[3]) {
    passwordArr.push(numericCharacters);
    password += getRandom(numericCharacters);
  }

  if (userInput[4]) {
      passwordArr.push(specialCharacters); 
      password += getRandom(specialCharacters);   
  }

  //Loop to add remainig characters to the password.
  for (i = passwordArr.length; i < userInput[0]; i++) {
    let randomPassArr = getRandom(passwordArr);
    password += getRandom(randomPassArr);
    
  }
  return password;
  
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
