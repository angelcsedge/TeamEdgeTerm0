/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

let customer1 = READLINE.question("Input your Name: ");

let customer2 = READLINE.question("Input your accociate's Name: ");

let customer3 = READLINE.question("Input your other accociate's Name: ");
	

let customer1Food;
let customer1Beverage;
let customer2Food;
let customer2Beverage;
let customer3Food;
let customer3Beverage;

function recieveOrder(customer, item){
	price = parseInt(READLINE.question(` Insert the cost of ${customer} ${item}: `));
	return price;
}
 

customer1Food = recieveOrder(customer1, 'Food');
customer1Beverage = recieveOrder(customer1, 'Beverage');
customer2Food = recieveOrder(customer2, 'Food');
customer2Beverage = recieveOrder(customer2, 'Beverage');
customer3Food = recieveOrder(customer3, 'Food');
customer3Beverage = recieveOrder(customer3, 'Beverage');

console.log(customer1Food, customer1Beverage, customer2Food, customer2Beverage, customer3Food, customer3Beverage);













/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function calculateCosts(food, beverage){
	usertip = READLINE.question('how much would you like to tip? 10%? 20%? 30%');
	meal = food + beverage;
	tax = meal * 10.25;
	totalwtax = meal + tax;
	let tip = 0
	if(usertip = '10%'){
		tip = totalwtax * .10;
	}
	else if(usertip = '20%'){
		tip = totalwtax * .20;
	}
	else if(usertip = '30%'){
		tip = totalwtax * .30;
	}
	total = totalwtax + tip;
	return total;
}










/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function giveReceipt(customer, food, beverage, total){
	console.log(`${customer}`)
		Food: (`${food}`)
		Beverage: (`${beverage}`)
		+ tax & tip
		Total: (`${total}`);
}


giveReceipt(customer1, customer1Food, customer1Beverage, customer1total);
giveReceipt(customer2, customer2Food, customer2Beverage, customer2total);
giveReceipt(customer3, customer3Food, customer3Beverage, customer3total);






/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */

if (giveReceipt >= 20);{
	console.log("You earned a Buy one get One free on you next meal!");

}
 if (giveReceipt < 20);{
	consule.log("Have a Nice Day");
}

