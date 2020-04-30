
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




