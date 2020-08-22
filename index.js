/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 18;
if (votingAge > 18) console.log(true);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let first = 1;
let second = 2;
if (second == 2)
  //Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
  var a = Number("1999");
console.log(a);

//Task d: Write a function to multiply a*b
let a = 5;
let b = 10;
if (a * b) console.log(a * b);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to yendou in dog years - they say that 1 human year is equal to seven dog years

function humanAgeToDogAge(age) {
  var dogYears = 7 * age;
  console.log(dogYears);
}

humanAgeToDogAge(27);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function poundsOfDailyRawFood(lb) {
  var newWeight = (lb * 3) / 100;
  console.log("Your dog needs " + newWeight + " pounds of food a day");
}

poundsOfDailyRawFood(15);

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

var userChoice = prompt(
  "Cortana challenges you to rock, paper, scissors! what do you choose?"
);

var cortanaChoice = Math.random();
if (cortanaChoice < 0.33) {
  cortanaChoice = "rock";
} else if (cortanaChoice <= 0.67) {
  cortanaChoice = "paper";
} else {
  cortanaChoice = "scissors";
}

var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "You have tied!" + " " + "Lets play again?";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "Rock Wins!" + "<br>" + "You beat Cortana! Good Job!";
    } else {
      return "Paper Wins!" + "<br>" + "Cortana has defeated you! GG";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "Paper Wins!" + "<br>" + "You beat Cortana! Good Job!";
    } else {
      return "scissors wins" + "<br>" + "Cortana has defeated you! GG";
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      return "rock wins" + "<br>" + "Cortana has defeated you! GG";
    } else {
      return "scissors win" + "<br>" + "You beat Cortana! Good Job!";
    }
  }
};

document.write("Cortana chose: " + cortanaChoice + "<br>");
document.write(compare(userChoice, cortanaChoice));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var kilometers = parseInt(prompt("enter kilometers:"));
var miles = kilometers / 1.6;
console.log(miles + " Miles");

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

var feet = parseInt(prompt("Please enter feet:"));
var cm = feet * 30.48;
console.log(cm + " CM");

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalculator(grade) {
  if (grade >= 90) {
    return console.log("Your grade is an A");
  } else if (grade >= 80 && grade < 90) {
    return console.log("Your grade is a B");
  } else if (grade >= 70 && grade < 80) {
    return console.log("Your grade is a C");
  } else if (grade >= 60 && grade < 70) {
    return console.log("Your grade is a D");
  } else {
    return console.log("Your grade is a F");
  }
}

console.log(gradeCalculator(80));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
