// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
let principal = 200000;
let interest = 0.05;
let years = 30;
let name = "Alice";

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/

let monthlyInterestRate = interest / 12;
let periods = years * 12;




// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
//must acatually put the * sign not just leave it alongside 

let numerator = monthlyInterestRate * ( Math.pow((1 + monthlyInterestRate), periods));
let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
let monthlyRate = principal*(numerator/denominator);

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

console.log(monthlyRate);

name = 'Oscar'
function mortgageCalculator(){
	if(name === 'Oscar'){
		return ' OSCAR!!! your monthly rate is ' + monthlyRate;
	} else {
		return name + ' ,your monthly rate is ' + monthlyRate;
	}
}

console.log(mortgageCalculator());

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/
//Attempt 1
// function mortgageCalculator2(name, principal, interest, years){

// 	return name + ' your monthly rate is ' + monthlyRate;
// }

// console.log(mortgageCalculator2('dave & alice', 1000000, .05731, 30))


//Attempt 2 
// this works and is dumb / probably could look better
function mortgageCalculator3(name, principal, interest, years){
	const numerator = monthlyInterestRate * ( Math.pow((1 + monthlyInterestRate), periods));
	const denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
	let monthlyRate = principal*(numerator/denominator);
	return name + monthlyRate 
}

console.log(mortgageCalculator3('bobby', 1000000, .05, 30));

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

function mortgageCalculator4(name, principal, interest, years, creditScore){
//the only variable thing is the interest rate, so deal with that first THEN run the formula. 
	let monthlyInterestRate = 0;
	
	if(creditScore >=740){
		monthlyInterestRate = (interest-.05) / 12; 
	} else {
		monthlyInterestRate = interest / 12;
		//it calls global scope when you use let. SO, don't do that in the function.
		// if you take out the let you override global scope
	}

	let periods = years * 12;
	let numerator = monthlyInterestRate * ( Math.pow((1 + monthlyInterestRate), periods));
	let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
	let monthlyRate = principal*(numerator/denominator);
	return name + ' ' + monthlyRate;


}


console.log(mortgageCalculator4('sandra', 1000000, .07, 30, 760));


// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

function variableInterestRate(name, principal, interest, years, homeowner, hoa){
	// going to calculate property tax for you based on WA / CA average of .0125 
	let monthlyInterestRate = 0
	interest = interest //- .02

	for(let i = 0; i < 11; i++){

		interest += .005;;
		//can't use the toFixed as it turns it into a string so we'll make a string version for the reader to see. 
		//Probably not the best solution but to ensure the user doesn't see a crazy long interest rate
		monthlyInterestRate = (interest / 12);
		//console.log(typeof monthlyInterestRate)
		monthlyInterestRateString = monthlyInterestRate.toFixed(4); 
		periods = years * 12;
		numerator = monthlyInterestRate * ( Math.pow((1 + monthlyInterestRate), periods));
		denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
		
		monthlyRate = Math.round((principal*(numerator/denominator))+ ( (hoa/12) + ((principal*.0125) / 12) + (homeowner / 12) ));

		console.log(name + ' with an interest rate of ' + monthlyInterestRateString + ' your monthly rate is ' + '$' + monthlyRate);
		//don't put return, because return ends a function aafter round 1!
	}	
}




console.log(variableInterestRate('Property1', 300000, .0373, 30, 650, 0));
console.log(variableInterestRate('Property2', 200000, .05, 30, 650, 0));
console.log(variableInterestRate('Property3', 300000, .05, 30, 650, 0));

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */
// Source of formula: https://rianjs.net/2013/01/how-to-calculate-mortgage-principle-from-monthly-payment-excel

//This waay just is max loan with no respect to the economy / trending interest rates.
function affordability1(salary){
	// monthlyInterestRate = interestRate/12;

	maxLoan = (salary / .28);
	console.log(maxLoan);
}

console.log(affordability1(134000, .04));

function affordability2(whatYouReasonablyWantToSpend, interest, years){
	monthlyInterestRate = interest / 12;
	periods = years * 12 //months in a year
	//we're going to use the present value formula 
	// paymentYouWantToSpend * ( 1 -  (1 + monthlyInterest)^ periods / monthlyInterest)
	maxLoan = whatYouReasonablyWantToSpend * ((Math.pow((1 - monthlyInterestRate), periods)) / monthlyInterestRate);
		console.log('$'+ Math.round(maxLoan));

}
//this formula gives a pretty low number, I think because it's not including the part where you don't have to put the full down on it.. Or something..
//Moving on, but will think about this further. 
affordability2(1900,.05, 30)
/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */

