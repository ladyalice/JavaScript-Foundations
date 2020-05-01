
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







