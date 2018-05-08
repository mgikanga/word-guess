//inquirer npm initialization
var inquirer = require("inquirer");

var letter = require('./letter.js')
//import the word.js
var letter = require('./word.js')
console.log(letter)
//variable for user guesses count
var chances = 10;
// array of words to be guessed
var words = ["apple", "mango","pineapple","strawberry","orange"];
//randomly pick a word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
//function to ask user for the letter
function ask(){
inquirer.prompt([
    {
      name: "letter",
      message: "Guess a letter ?"
    }
  ]).then(function(answers) {
console.log(answers.letter)
    //var guessed = new Letter(answers.letter, "l");
    
   // guessed.guessing();
   chances--;
  });
  
  console.log("\n"+chances)
}
ask();