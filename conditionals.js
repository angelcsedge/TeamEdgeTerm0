
/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");
/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */

let msg = "";
msg = READLINE.question("age?")
consule.log("my age is"+msg)

if (msg >= 16){
consule.log("you can drive")}

else {consule.log("You are not old enough to drive")
}








/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */

let num1 = 10;
let num2 = 18;
let num3 = 6;

if ((num1 > num2) && (num1 > num3)){
    consule.log("Player 1 Wins");
}

else if (num2 > num3){
    consule.log("Player 2 Wins");
}
else {
    console.log("Player 3 Wins");
}





/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...


**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:
let  weatherArray = ["Sunny", "Rainy", "Snowing"];

let randomweather = weatherArray[Math.floor(Math.random() = weatherArray.length)];
consule.log(randomweather)

if ((randomweather = "Sunny")){
    consule.log("Wear a hat and sunglasses")
}

else if (randomweather = "Rainy"){
    consule.log("Bring and Umbrella")
}

else if (randomweather = "Snowing"){
    consule.log("Wear gloves and a scarf")
}








//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/

let  weatherArray = ["Sunny", "Rainy", "Snowing"];

let randomweather = weatherArray[Math.floor(Math.random() = weatherArray.length)];
consule.log(randomweather)

let temperatureArray = ["30", "90","60"];

let randomtemperature = temperatureArray[Math.floor(Math.random() = temperatureArray.length)];
consule.log(randomtemperature)

if ((randomweather = "Sunny") && (randomtemperature = "90")){
    consule.log("Wear a hat and sunglasses")
}

else if ((randomweather = "Rainy") && (randomtemperature = "60")){
    consule.log("Bring and Umbrella")
}

else {
    consule.log("Wear gloves and a scarf")
}









/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */

let msg = "";
msg = READLINE.question("day?")
consule.log("The day of the week is"+msg)

let day1 = 1;
let day2 = 2;
let day3 = 3;
let day4 = 4;
let day5 = 5;
let day6 = 6;
let day7 = 7;

if (msg == day1){
    consule.log("Monday")
}
else if (msg == day2){
    consule.log("Tuesday")
}
else if (msg == day3){
    consule.log("Wendsday")
}
else if (msg == day4){
    consule.log("Thursday")
}
else if (msg == day5){
    consule.log("Friday")
}
else if (msg == day6){
    consule.log("Saturday")
}
else if (msg == day7){
    consule.log("Sunday")
}
else {
    consule.log("There are only 7 days in a week")
}







/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).

  Those are a lot of conditions...

  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/

let year = 2019;

if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
    consule.log( year + "is a leap year")
}

else {
    consule.log("Not a leap year")
}





