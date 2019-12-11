// Section 1
// 1.a Question: What does the acronym DRY stand for?
    // 1.a Answer: Do Not Repeat Yourself
// 1.b Question: Why should we pay attention to it?
    // 1.b Answer: To not repeat yourself & make the code longer that it needs to be & to
    // facilitate updating the code by future coders. 
// 1.c Question: What programming tools have we learned to write DRY code?
    // 1.c Answer: functions
// 2. What is the difference between const and let and var? Please limit your answer to no
// more than three short sentences. Don't be afraid to research using google and other
// resources
    // 2. Answer: const is constant values, they can only be accessed within the same block
    // where it was declared. let is a block scoped which can be changed but not re-declared.
    // var is variable that are set for use in the code & can be re-declared.
//////////////////////////////////////
    // Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
// a < b
// c > d
// 'Name' === 'Name'
// a < b < c
// a === a < d
// e === 'Kevin'
// 48 === '48'
// f != e
// Set a new variable g to 0
var g = 0;
// console.log g
console.log('g');
// Then set the variable g to be equal to b + c
var g = b + g
// console.log g
console.log(g);
// Question: Did you use const, let or var? 
    // Answer: Used var.
// Question: Why did you choose the one you chose?
    // Answer: Used var because it has a greater range of uses.
// Question: What happens if you don't use const, let or var? 
    // Answer: The code runs properly.
// Question: Do you get an error? 
    // Answer: No
// Question: If so what does it say?
    // Answer: Didn't get an error.
// Question: What happens if you write 10 = g?
    // Answer: It returns the following error
    // "SyntaxError: Unexpected number
    // at wrapSafe (internal/modules/cjs/loader.js:1050:16)
    // at Module._compile (internal/modules/cjs/loader.js:1098:27)
    // at Object.Module._extensions..js (internal/modules/cjs/loader.js:1167:10)
    // at Module.load (internal/modules/cjs/loader.js:983:32)
    // at Function.Module._load (internal/modules/cjs/loader.js:891:14)
    // at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    // at internal/main/run_main_module.js:17:47".
//////////////////////////////////////
// Section 3
// Question: Is the code below an infinite loop? 
    // Answer: Yes
// Question: Why or why not?
    // Answer: There is no code block to be executed.
// Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your
// ultimate answer is correct.
// while (true) {
	//console.log('Do not run this loop');
// }
// Infinite loop II
// Question: Is this loop an infinite loop?
    // Answer: No
// Question: Why or why not?
    // Answer: The code block to be excuted is const runProgram = true;
// const runProgram = true;

// while (runProgram) {
	// console.log('Do not run this loop');
	// runProgram = false;
// }
// Question: Infinite or not infinite? 
    // Answer: Not infinite
// Quesiton: What is the expected output?
    // Answer: Do not run this loop
// Reading code
// Question: Without running this loop, what is the expected output?
    // Answer: 20
// sets letters to equal A
let letters = "A";
// declares i to equal 0
let i = 0;

// starts a loop if i is less than 20
while (i < 20) {
// sets the bucket called letters to capture the letter "A" until i is = to 20
    letters += "A";
// increase i by 1 & set the new value of i
    i++;
// closes while loop 
}
// prints "A" 21 times.
console.log(letters);
//////////////////////////////////////
// Section 4
// Question: A for loop performs the same operation as a while loop. But what are the key differences, if any? 
    // Answer: for loop is used when we know the amount of iterations. while loop is used
    // when the numer of iterations are not known. When a condition is not set for a for loop
    // it will run infinitly. When a condition is not set of a while loop you will recieve
    // an error.
// Question: What are the similarities?
    // Answer: They are loops which will run unitl a condition is met.
// Question: What are the three components of the control panel? 
    // Answer: The first part of the control panel is: let i = 0 which declares i to 0
    // Answer: The second part of the control panel is: i < 100 which tells the program
    // to run until i is greater than 100
    // Answer: The third part of the control panel is: i++ which inceases i by 1
    
// For loop II
for (let i=0; i<=100; i++) {
	console.log(i);
}

//For loop in reverse
for (let i=100; i>=0; i--) {
	console.log(i);
}

// More counting
for (let i=0; i<=10; i++) {
	console.log("The value of i is: ",+i" 10");
}

// Iteration
// Iterate over the StarWars array and print each element to the console.
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i = i + 1 ){
  console.log(StarWars[i]);
}
// Iterate over the StarWars array again and print each character's name as well as the
//  value of i.
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i = i + 1 ){
  console.log(StarWars[i] + " " + i);
}