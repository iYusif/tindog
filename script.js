// var name = prompt("What is your name?", "Hanry");
// var name2 = name.slice(1);
// var name3 = name2.toLowerCase();
// var name4 = name.charAt(0).toUpperCase() + name3;
// alert("Hello " + name4 + ", how are you?");

// var name = prompt("what is your name?", "Example");
// var firstChar = name.slice(0, 1);
// var upperCaseFirstChar = firstChar.toUpperCase();
// var restOfName = name.slice(1, name.length);
// restOfName = restOfName.toLowerCase();
// var capitalisedName = upperCaseFirstChar + restOfName;
// alert("Hello " + capitalisedName + ", how are you?");

// var dogAge = prompt("How old is your dog?", "");
// var humanAge = (dogAge - 2) * 4 + 21;
// alert("If your dog would be a human it would be a " + humanAge + " years old");

// function getMilk(money) {
//   var costOfBottle = 1.5;
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");

//   var numberOfBottles = Math.floor(money / 1.5);

//   console.log("buy " + numberOfBottles + " bottles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// getMilk(10);

// function lifeInWeeks(age) {
//   var days = (90 - age) * 365;
//   var weeks = (90 - age) * 52;
//   var months = (90 - age) * 12;
//   console.log(
//     `You have ${days} days, ${weeks} weeks, and ${months} months left.`
//   );
// }

// lifeInWeeks(29);

// function getMilk(money) {
//   var costOfBottle = 1.5;
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");

//   var numberOfBottles = Math.floor(money / 1.5);

//   console.log("buy " + numberOfBottles + " bottles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return money % 1.5;
// }

// var change = getMilk(4);

// console.log(change);

// function getMilk(money, costPerBottle) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return calcChange(money, costPerBottle);
// }

// function calcBottles(startingMoney, costPerBottle) {
//   var numberOfBottles = Math.floor(startingMoney / costPerBottle);

//   return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle) {
//   var change = startingAmount % costPerBottle;
//   return change;
// }

// console.log("Hello Yusif, this are your " + getMilk(9, 1.5) + " change.");

// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     return Math.round(bmi);
// }

// var n = Math.random();
// console.log(n);

// var name1 = prompt("Your name?");
// var name2 = prompt("Your lover name?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// if (loveScore > 70) {
//     alert("Your love score is " + loveScore + "%. You have to be married");
// } else if (loveScore > 30 && loveScore <= 70) {
//     alert("Your love score is " + loveScore + "%");
// } else {
//     alert("Your love score is " + loveScore + "%. You have to seperate");
// }

// function bmiCalculator(weight, height) {
//   var bmi = weight / Math.pow(height, 2);
//   bmi = Math.round(bmi);
//   if (bmi < 18.5) {
//     return "Your BMI is " + bmi + ", so you are underweight.";
//   } else if (bmi > 18.5 && bmi < 24.9) {
//     return "Your BMI is " + bmi + ", so you have a normal weight.";
//   } else {
//     return "Your BMI is " + bmi + ", so you are overweight.";
//   }
// }

// console.log(bmiCalculator(70, 1.78));

// My Code

// function isLeap(year) {
//   if (
//     year % 4 !== 0 ||
//     (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0)
//   ) {
//     return "Not leap year.";
//   } else if (
//     (year % 4 === 0 && year % 100 !== 0) ||
//     (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
//   ) {
//     return "Leap year.";
//   }
// }

// console.log(isLeap(1948));

// Angela`s Code

// function isLeap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return ("Leap year.");
//             } else {
//                 return ("Not leap year.");
//             }
//         } else {
//             return ("Leap year.");
//         }
//     } else {
//         return ("Not leap year.");
//     }
// }

// console.log(isLeap(year));

// var guestList = ["Amrah", "Elgiz", "Pervin", "Araz", "Ferid", "Yusif"];
// var guestName = prompt("What is your name?");
// if (guestList.includes(guestName)) {
//     alert("Wellcome to the party, have a good day...");
// } else {
//     alert("I am sorry but you are not our guest");
// }

// var output = [];
// var count = 0;
// function fizzBuzz() {

//      while (count <= 100) {

//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//         output.push("Fizz");
//     } else if (count % 5 === 0) {
//         output.push("Buzz");
//     } else {
//         output.push(count);

//     }

//     count++;
// }
//     console.log(output);

// }

// function beerBottles() {

//     var numberOfBottles = 5
//     while (numberOfBottles > 0) {
//         var bottleWord = "bottles";
//         if (numberOfBottles === 1) {
//             bottleWord = "bottle";
//         }
//         console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//         console.log(numberOfBottles + " " + bottleWord + " of beer,");
//         console.log("Take one down, pass it around,");
//         numberOfBottles--;
//         if (numberOfBottles === 0) {
//             bottleWord = "No more bottles";
//             console.log(bottleWord + " of beer on the wall.");
//             console.log("No more bottles of beer on the wall, no more bottles of beer,");
//             console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
//         }
//     }
// }

// Fibonacci Generator

// function fibonacciGenerator(n) {

//     var output = [];
//     if (n === 1) {
//         output = [0];
//     } else if (n === 2) {
//         output = [0, 1];
//     } else {
//         output = [0, 1];

//         for (var i = 2; i < n; i++) {
//             output.push(output[output.length - 2] + output[output.length - 1]);

//         }
//     }
//     return output;
// }
