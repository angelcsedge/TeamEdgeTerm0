/* -------------------------------------------- 

	You've just learned all about functions. 
	Now take what you've learned to create your own

					CALCULATOR!

	We'll guide you through the first few steps,
	then you'll have a chance to add your own features
	that will make this your new go-to calculator!

  -------------------------------------------- */

  console.log(`My Simple Calculator`);

/* -------------------------------------------- 

Part 1: 

	The first features of any simple calculator is that
	it should be able to perform the basic math operations. 
	Let's start by writing the functions we'll need to execute 
	the following operations:

		Addition
		Subtraction

  -------------------------------------------- */

// Write a function called addNumbers that will take two numbers and return the sum.

function addNumbers(num1, num2){
let product = num1 + num2;
	console.log('${num1} + ${num2} is ${product}');
}

addNumbers(4, 9);





// Write a function called subNumbers that will take two numbers and return the difference.

function subNumbers(num1, num2){
	let product = num1 - num2;
		console.log('${num1} - ${num2} is ${product}');
	}
	
	subNumbers(10, 5);



/*------------*/
// Testing Code - Uncomment the code below to test your code!

// checkAnswers(addNumbers(5, 15), 20); 
// checkAnswers(addNumbers(3, 18), 21);
// checkAnswers(addNumbers(12, 28), 40); 

// checkAnswers(subNumbers(18, 7), 11);
// checkAnswers(subNumbers(11, 9), 2);
// checkAnswers(subNumbers(18, 21), -3);

/* -------------------------------------------- 

Part 2: 

	Now that you have addition and subtraction down, let's add the other operators we learned!

	Finish off your basic calculator by writing the functions 
	for the following operations:

		Multiplication
		Division 

  -------------------------------------------- */

// Write a function called multiplyNumbers that will take two numbers and return the product.

function multiplyNumbers(num1, num2){
	let product = num1 * num2;
		console.log('${num1} * ${num2} is ${product}');
	}
	
	multiplyNumbers(3, 6);




// Write a function called divideNumbers that will take two numbers and return the quotent.

function divideNumbers(num1, num2){
	let product = num1 / num2;
		console.log('${num1} / ${num2} is ${product}');
	}
	
	divideNumbers(3, 6);
	




/*------------*/
// Testing Code - Uncomment the code below to test your code!

// checkAnswers(multiplyNumbers(10, 3), 30); 
// checkAnswers(multiplyNumbers(21, 7), 147);
// checkAnswers(multiplyNumbers(4, 16), 64); 

// checkAnswers(divideNumbers(24, 100), `.24`);
// checkAnswers(divideNumbers(21, 7), `3`);
// checkAnswers(divideNumbers(15, 4), `3.75`);

/* -------------------------------------------- 

Part 3: 

	Now that you have your basic functions in place, you need to get some user input.
	What's a calculator for if no one is using it?

Write a function that will prompt the user for the operation they want to call and the values they are inputting.

  -------------------------------------------- */

function UserInput(){
  let Input = READLINE.question("what operation do you want addition, subtraction, multiplication, or division?")

if (input == "addition"){
	let addinput1 = READLINE.question("what is your first number?");
	let addinput2 = READLINE.question("what is your second number?");
	return addNumbers((parselnt (addinput1), parselnt (addinput2)));
}

else if ( input == "subtraction"){
	let subinput1 = READLINE.question("what is your first number?");
	let subinput2 = READLINE.question("what is your second number?");
	return subNumbers((parselnt (subinput1), parselnt (subinput2)));
}

else if (input == "multiplication"){
	let multiplyinput1 = READLINE.question("what is your first number?");
	let multiplyinput2 = READLINE.question("what is your second number?");
	return multiplyNumbers((parselnt (multiplyinput1), parselnt (multiplyinput2)));
}

else if (input == "division"){
	let divideinput1 = READLINE.question("what is your first number?");
	let divideinput2 = READLINE.question("what is your second number?");
	return divideNumbers((parselnt (divideinput1), parselnt (divideinput2)));
	}
}


output= UserInput()
	consule.log(output)
















/* -------------------------------------------- 

Part 4: 

	Now that you have all of the basic four operations completed, you get to add your own features!
	What will you add to make this your go-to calculator? 

	Stuck? : Think about what you count/calculate on a (almost) daily basis.
	Can you write a function that will take in the data you need and do the calculation for you? 

	(I know I calculate how many hours of sleep I get every day... ｡(*^▽^*)ゞ )

  -------------------------------------------- 

Write a function or functions that will add some unique features to your calculator. 
Don't forget to:
		Give your function an name and parameters that are self explanatory and written in camelcase!
		Use comments throughout your code
		Test your code!
  
  -------------------------------------------- */

function moneySpent(){
	let spent1 = READLINE.question("how much money did you have?")
	let spent2 = READLINE.question("how much money do you have left?")
	return subNumbers(parseFloat (spent1), parseFloat (spent2));

}



spentMoney= moneySpent()
	consule.log(spentMoney)



















/* -------------------------------------------- */
// Ignore this section. This is just for checking your work

function checkAnswers(genAnswer, correctAnswer){
	if(genAnswer == correctAnswer){
		console.log(`Your code works!`)
	}
	else{
		console.log(`Try again, your code generated ${genAnswer} but the correct answer is ${correctAnswer}`);
	}
}
