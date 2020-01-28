// 1. What does the acronym **DRY** stand for? Answer: Don't Repeat Yourself.
// 1.1 Why should we pay attention to it? Answer: Repetitive code is teadious & not considerate to the next person who will manage the code.
// // 1.2 What programming tools have we learned to write **DRY** code? Answer: Functions
// 2.  What is the difference between `const` and `let` and `var`? Please limit your answer to no more than three short sentences. Don't be afraid to **research** using google and other resources Answer: const is constant values, they can only be accessed within the same block where it was declared. let is a block which can be changed but not re-declared. var is a variable that is set for use in the code & can be re-declared.
/////////////////////////////////
/////////////////////////////////
// **Code:**
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kelvin';
// const f = false;
//     console.log(a < b);
//     console.log(c > d);
//     console.log('Name' === 'Name');
//     console.log(a < b < c);
//     console.log(a + a < d);
//     console.log(e != 'Kevin');
//     console.log(48 == '48');
//     console.log(f != e);
/////////////////////////////////
// - Set a new variable `g` to `0`
// - console.log `g`
// - Then set the variable `g` to be equal to `b + c`
// - console.log `g`
// g = 0
//     console.log(g);
// g = b + c;
//     console.log(g);
/////////////////////////////////
// - **Answer:**
//   - Did you use `const`, `let` or `var`?  Answer: used Let.
//   - Why did you choose the one you chose? Answer: Ira told us to use let over var.
//   - What happens if you don't use `const `, `let` or `var`? Answer: code still runs properly.
//   - Do you get an error? Answer: no
//   - If so what does it say? Answer: didn't get an error.
//   - what happens if you write `10 = g`? Anwser: 
    // SyntaxError: Invalid left-hand side in assignment
    // at wrapSafe (internal/modules/cjs/loader.js:1050:16)
    // at Module._compile (internal/modules/cjs/loader.js:1098:27)
    // at Object.Module._extensions..js (internal/modules/cjs/loader.js:1167:10)
    // at Module.load (internal/modules/cjs/loader.js:983:32)
    // at Function.Module._load (internal/modules/cjs/loader.js:891:14)
    // at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    // at internal/main/run_main_module.js:17:47
/////////////////////////////////
/////////////////////////////////
// **Bonus Challenge (optional):**
// Answer: could not figure this out.
// Replace the underscores to make a Boolean expression that evaluates to true. Use `>` , `<` and `===` only.
//   console.log(a _ (b || f) _ !f && e _ c);
// [Bonus hint]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
/////////////////////////////////
/////////////////////////////////
// ### Section 3
// Is the code below an infinite loop?Answer: yes it is an infinite loop.
// Why or why not? There is not break code.
/////////////////////////////////
// #### Infinite loop II
// is this loop an infinite loop?  Answer: no
// Why or why not? The code will not run, const cannot be re-assigned.
// #### Reading code
// declares the variable letters as A
// let letters = "A";
// declares the variable i as 0
// let i = 0;
// start a while loop that will run as long as i is less than 20
// while (i < 20) {
// concatenate letters which is A with A
    // letters += "A";
// increments the value of i by 1
//   i++;
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
// }
// prints a row of A's
// console.log(letters);
// Learned that using the += is a form of concatenation.
/////////////////////////////////
/////////////////////////////////
// ### Section 4
// #### For loops
// A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities? Answer: for loop is used when we know the amount of iterations. while loop is used when the number of iterations are not known. When a condition is not set for a for loop it will run infinitly. When a condition is not set of a while loop you will produce an error.
/////////////////////////////////
// #### For loop control panel
// What are the three components of the **control panel**? Each component is separated by a semicolon `;`. 
// Answer:
// The first part of the control panel is: initialization
// The second part of the control panel is: condition
// The third part of the control panel is: final expression
// #### For loop control panel
// #### For loop II
// for (num = 0; num <= 999; num++) {
//     console.log(num);
// }
/////////////////////////////////
/////////////////////////////////
// **Bonus Challenge (optional):**
// What is the difference between `\` (`backslash`, above the `enter`/`return` key) and `/` (`forward slash` or just `slash`, shares the key with the `?`)? The backslash is used to as a text indicator that is typed before the character to be regarded as text. The foward slash is used a the division operand.
// What is `\` doing in the string? Answer: advising that the next character is text.
// console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// console.log("Without you, today's emotions are the scurf of yesterday's");
/////////////////////////////////
// #### For loop in reverse
// for (num = 999; num >= 0; num--) {
//     console.log(num);
// }
/////////////////////////////////
// #### More counting
// for (i = 1; i <= 10; i++) {
//     console.log("The value of i is: " + i + " of 10");
// }
/////////////////////////////////
// **Bonus Challenge (optional):**
// for (i = 1; i <= 10; i++) {
//     console.log(`The value of i is: ${i} of 10`);
// }
/////////////////////////////////
/////////////////////////////////
// ## Iteration
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
//     for (i = 0; i < StarWars.length; i++) {
//         console.log(StarWars[i];
//  }
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
//     for (i = 0; i < StarWars.length; i++) {
//         console.log(StarWars[i] + " -- The value of i is " + i);
//     }
/////////////////////////////////
// **Bonus Challenge (optional):**
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
//     for (i = 0; i < StarWars.length; i+= 2) {
//         console.log(StarWars[i]);
//  }