
//A bunch of practice - 
let name2 = "Sam"


if(name2.length % 2 === 0) {
  console.log("there are an even number of letters in name")
} else if(name2.length % 2 != 0) {
  console.log('there are an odd number of letters in the name.')
} else if(name2.length <= 2){
  console.log('this name is not a string.')
}


// for (let i = 0; i < 10; i++){
// 	console.log(i);
// }

// let count = 1
// while (count < 10){
// 	console.log(count);
// 	count +=2;
// }


// for (let i = 0; i > 5; i++){
// 	var coinFlip = Math.round(Math.random());

// 	if (coinFlip === 1){
// 		console.log('heads')
// 	} else{
// 		console.log('tails')
// 	}

// }


function exerciseTwo(){
	let count = 0;
  
  // In this exercise write your own for loop
  // It should loop 10 times and count by 2
  // Create a variable called count
  // For each loop reassign count to the current value of count + i such that your final `count` is 0 + 2 + 4 + 6 + ... = 90
  for (let i = 0; i < 10; i++){
  	console.log(count);
  	count +=2
  	count = i + count;


}

  //Please write your answer in the line above. 
  return count;
}
  
console.log(exerciseTwo())


function add(a, b){
	console.log(a + b)
}

add(3, 500);

const tunaCount = function(a, b){

	console.log(a + b);
}

tunaCount(10+22);


const tigerCount = (a ,b) => console.log(a + b);

tigerCount(200, 400);


function turkey(parameter1, parameter2){
	//parameters are variables that can be used in a funtion

	//block of repeatable code
	console.log('hello ' + parameter1 + 'you are ' + parameter2 + ' old.');

	//return allows content to escape the function. Once it is called, then the function stops.
}

turkey('argument1', 'argument2');


function adultSwim(age){
	const valid = "Welcome";
	const invalid = "Wow buster, go back to Nick Jr.";
	if(age >= 18){
		return(valid)
	} else {
		return(invalid)
	}
}

let Alice = adultSwim(32);
console.log(Alice)

function flip(repeat){
	for(let i = 0; i < repeat; i++){
		var coinFlip = Math.round(Math.random());
		if (coinFlip === 1){
			console.log('tails')
		}
		else {
			console.log('tails')
		}
	}
}

flip(15);
console.log('******Arrays***')
//Arrays and Objects



function pokeContest(){
	const answer = Math.round(Math.random() * 5);
	const contest = ['cool', 'tough',  'smart', 'cute', 'beauty'];
	luckyTrait = contest[answer];
	console.log(luckyTrait);
}

pokeContest();

// function createRandomInt(min, max){
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min) + min);
// }

//global atm, but should bein the function if it will just be used there. 
//but for the purpose of tinkering with this for other pracatice problems.
	const colors = ['857E61','B7A196', 'DDC3D0','DBDAEA', 'DBFCFF'];


function printColors(){

for(let i = 0; i < 5; i++){
	colorPrint =  colors[i];
	console.log(colorPrint)

}

}

printColors();

console.log(colors.length);

//push / pop things at the end of the array (these are methods)

const flavors = ['chocolate chip', 'sugar', 'peanut butter', ' lemon crisp'];

flavors.push('kitchen sink');

console.log(flavors);

flavors.pop();

console.log(flavors);

// unshift / shift things at the beginning of the array (other methods)


flavors.unshift('elk meat');
console.log(flavors);

flavors.shift();

console.log(flavors);

const studentNames = ['Jay', 'Grant', 'Erik', 'Jon'];

studentNames.pop();

console.log(studentNames);

studentNames.push('Dave');

console.log(studentNames);

studentNames.unshift('Keith');

console.log(studentNames);

studentNames.unshift('Travis');

console.log(studentNames);

studentNames.shift();

console.log(studentNames);

/*
  The Array truly is a beatiful thing.
  For this mini assignment we're going to have you go through some of the commonly used array methods.
  There are methods built onto the Array prototype 
  so here is a refernce of where you can learn more about them.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  Array Methods you should use to complete these assignemnts:
  .pop(), .push(), .splice(), .slice(), .shift(), .unshift(), .map() .filter(),
*/



/* 
  Problem 1: Justice League
  Remove the side kick 'Robin' from the front of this List.
  Add a super hero `Green Lantern` to the end of this List.
  Add a super hero `Superman` to the front of this List.
  Your final array should look like this:
  [ 'Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman', 'Green Lantern' ]
*/

const justiceLeague = ['Robin', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman'];


justiceLeague.shift();
justiceLeague.push('Green Lantern');
justiceLeague.unshift('Superman');
console.log(justiceLeague);
/* 
  Problem 2: Middle Earth
  In our list of Characters from Middle Earth remove sauraman. He's a traitor.
*/

const middleEarth = ['Frodo', 'Samwise', 'Gandalf', 'Sauraman', 'Treebeard'];
middleEarth.splice(3, 1);
//splice: start with the position, then the number of items you'd like removed
console.log(middleEarth);


/* 
  Problem 3: Numbers
  map over this array, and return a new array of the numbers in it, multiplied by 10
*/

const numbers = [2, 3, 4, 5, 6];


let newArray = numbers.map(x => x * 10);

console.log(newArray);

//put another way
let newArrayTest = numbers.map(function(num){
	return num * 20;
})

console.log(newArrayTest);
/* 
  Problem 4: Filter Friends
  Here you're going to create two new arrays. 
  One called femaleFriends (a list of all friends filtered where gender === 'F')
  One called maleFriends (a list of all friends filtered where gender === 'M')
*/

const friends = [
  { name: 'Monica', gender: 'F' },
  { name: 'Chandler', gender: 'M' },
  { name: 'Ross', gender: 'M' },
  { name: 'Phoebe', gender: 'F' },
  { name: 'Joey', gender: 'M' },
  { name: 'Rachel', gender: 'M' }
];

const femaleFriends = friends.filter(function(female){
	return female.gender == 'F';
});

; // finish this
const maleFriends = friends.filter(function(male){
	return male.gender == 'M';
}); // finish this


console.log(femaleFriends);
console.log(maleFriends);



//Training kit
const user = {
	username: 'toastedOats',
	password: 'ohGoody',
	lovesJS: true,
	2: false
};

console.log(user.username);
console.log(user.lovesJS);


console.log(user['pass']);

//two ways to call a key:value from an object--
//dot and bracket notation
const passString = user.password;
const passString2 = user['password'];

console.log(passString);
console.log(passString2);
console.log(user[2]);
console.log(typeof user[2]);

const newUser = {
	isNew: true,
}

// you can assign variables when you make the object or with the dot / bracket notation later
const loveJSString = 'lovesJS'

newUser.username = 'new.username'





/////////////

// Objects 
// Lambda School video: https://www.youtube.com/watch?v=M8h7ZUoU6B0&feature=youtu.be
// Order of properties does not matter, if order matters, use an array.
//everything in JS is an Object!
// objects are used for collections of data


//anatomy of objects
const dog = {

	//key vlaue pairs (properties and values)
	// methods - functions that. belong to the object.
	// what type of function do we not want to use in an object?
	// we don't want to use arrow functions

	name: 'Ada',
	breed: 'Bali dog',
	age: 4,
	color: 'peach',
	food: 'cats',
	eat: function(){
		//string template literal - allows us to concatinate
		 //and put things together without using a less sign
		 return `${this.name} likes to eat ${this.food}`;
		 //the this keyword is implicit binding
		 //when the function invoked, 
		 //look to the left of the dot, that's what "this" refers to.
		 // in this caase, the nearest object on he left is dog, so that's what this is referring to.
		 // this is about 80% of use cases and it 
		 //applies to objects with methods
	},
	//we can nest as many objects as deep as we'd like
	sister: {
		name: 'Noa',
		breed: 'Bali dog',
		age: .8,

	},

}


console.log(dog);

//in an object dot notation is more common
console.log(dog.name);


//bracket notion - like an arrays
//useful if you have keys or data from another language 

console.log(dog['name']);

//in this case, we are referencing eat, we are not invoking it.
console.log(dog.eat);

//to invoke the object function, use parenthesis after the function:
console.log(dog.eat());


console.log(dog.sister.name);



//Objects inside of arrays

const places = [
	{city: 'Tel Aviv', country: 'Israel',  region: 'Middle East'},
	{city: 'Toronto', country: 'Canada', region: 'North America'},
	{city: 'Najaf', country: 'Iraq', region:'Middle East'},
	{city: 'Seattle', country: 'USA', region: 'North America'},
	{city: 'Toronto', country: 'Canada', region: 'North America'},
];

console.log(places);

//create a new array middles East loop through places and push city names to a new array

// const middleEast = places.filter(function(x){
// 	return x.region == 'Middle East';
// });

// console.log(middleEast);

/////////////**Instructor breakdown
/////PRO TIP: Take it step by step
//start with the fitrst part first
//create a new array middleEast
const middleEast = [];
//when we say const, we can't change the type but we can add and remove elements from an array

//loop through places
for(let i = 0; i <= places.length - 1; i++){
	//console.log(places[i].region);
	//just think it through step by step.. How do you grab places?
	if(places[i].region === 'Middle East'){
//push city names to a new array
		middleEast.push(places[i].city);
		
		
	}
}

console.log(middleEast);



console.log('javascript is cool! Right ' + dog['name'] + '?!' );
//OR, you can use backticks ( the tilde key)
console.log(`Javascript is cool! Right ${dog['name']}?! `);


// for loop - great for looping over data
// needs 3 things: 
// 1. initial expression - where the loop starts (this is why we saay i = 0 )
// we don't need to use i, it's just. a variable
// 2. condition - the condition will run each time before the loop runs/if the condition is true the loop will run one more time/
//if the condition is false it will more to the next line of code
// 3. increment expression - i++ - we are taking i, which we've set to 0
// and increementing it by 1
// we need let instead of const because we are changing the value of i when increment
// NOTE: no semi colon affer the increment, this will break the loop


//We can use functions to create an object

//make a pet function
//that takes name and species
//and a boolean behaved 
//return an object with that

//ATTEMPT 1
// function petMaker(name1, species1, behaved1){

// 	return petPlace { 
// 		name: 'name1', 
// 		species: 'species1',
// 		behaved: 'behaved1'
// 	}
// }
// ANSWER
//HOW TO MAKE OBJECTS USING FUNCTIONS
function petMaker(name, species, behaved){

	return { name, species, behaved };
}

//Each time the function is invoked, it creaates a new object
console.log(petMaker('Walter', 'Turkey', true));
console.log(petMaker('Sally', 'Fish', false));
console.log(petMaker('Scoot', 'Dog', true));
const pet3 = petMaker('Goober', 'Raccoon', false);

delete pet3.species;


console.log(pet3);

const newObject = {
	name: 'Steph',
	SO: false
}

delete newObject.SO;

console.log(newObject);



/*
  Objects are used all over in JavaScript.
  The following problems will help you get a better feel for object literals
  
  We want you familiar with the following Object methods:
  .keys(), .values(), .entries(), 
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


*/

/* 
  Problem 1: Giver Info
  return an array of an Objects properties/keys
*/

const student = { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver' };
const studentKeys = Object.keys(student);

console.log(studentKeys); // finish this.

/* 
  Problem 2: Giver Info
  using the same object as above.
  return an array of an Objects values
*/

const studentValues = Object.values(student);
console.log(studentValues[3]); // finish this.

/* 
  Problem 3: Giver Info
  Add a list of charecters to Jonas' object
  The list should be called 'characters' and it should be an array.
  example:
  { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver', characters: ['Lily', 'Mother', 'Father', 'Caleb', 'Asher']}
  next: select that list and iterate over it using `.forEach` simply log the name of each char in the list;
*/

const listOfChars = student.characters; // finish this.



















