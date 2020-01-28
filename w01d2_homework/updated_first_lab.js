// # Errors
// console.log("Making your way in the world today takes everything you've got.");
// console.log("Taking a break from all your worries, sure would help a lot.");
// console.log("Wouldn't you like to get away?");
// console.log("Sometimes you want to go");
// console.log("Where everybody knows your name,");
// console.log("and they're always glad you came.");
// // SyntaxError: missing g in log
// console.log("You wanna be where you can see,");
// // SyntaxError: missing ) after argument list
// console.log("our troubles are all the same");
// console.log("You wanna be where" + "everybody knows");
// // SyntaxError: missing + after argument list
// console.log("Your name.");
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// # Boolean Expressions
// **... and arithmetic**
// 1. `999 > 999` Answer: false
// 2. `999 == 999` Answer: true
// 3. `999 != 999` Answer: false
// 4. `-5 >= -4` Answer: false
// 5. `100 <= -100` Answer: false
// 6. `20 + 5 < 5` Answer: false
// 7. `81 / 9 == 9` Answer: true
// 8. `9 != 8 + 1` Answer: false
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// # Assignment operator vs Equality operator
// Write: What is the difference between:
// the **assignment operator** `=` Answer: used to assign values to a variable 
// and the **equality operator** `==` Answer: used to compare 2 variables
// ?
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// # While Loops: reps and reps
// #1
// let num = 0
// while (num <= 1000) {
//     console.log('Ginger chocolate honey patties');
//     num++
// }
//////////////////////////////////////////////////////////////////////////
// ## 2
// let num = 0
// while (num <= 1000) {
//     console.log(num);
//     num++
// }
//////////////////////////////////////////////////////////////////////////
// ## 3
// let num = 0
// while (num <= 1000) {
//     console.log("Current loop number is: ", num);
//     num++
// }
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// # For loops
// # 1
// for (num = 0; num <= 100; num++) {
//     console.log(num);
// }
//////////////////////////////////////////////////////////////////////////
// # 2
// for (num = 7; num > 7, num <= 635; num++) {
//     console.log(num);
// }
//////////////////////////////////////////////////////////////////////////
// # 3
// let start = 0;
// const limit = 100;
// for ( ; start <= limit; start++) {
//     console.log(start);
// }
//////////////////////////////////////////////////////////////////////////
// # 4
// let humanAge = 7;
// let dogAge = 1;
// for ( ; humanAge <= 15; humanAge++, dogAge++) {
//     console.log("If a dog is", dogAge, "years old then the dog is approximately", dogAge * 7, "years old in human years.");
// }