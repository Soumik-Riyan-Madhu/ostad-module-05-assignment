/* ===============================
Task 1 : Variables & Constants
=============================== */ 

console.log('=============== Task 1: Variables & Constants ===============');

let name = "Soumik";
let age = 17;
let favoriteColor = "Blue";

const country = "Bangladesh";

console.log("My Name is:", name);
console.log("I'm", age, "years old");
console.log("My Favorite Color is:", favoriteColor);
console.log("I'm from:", country);

/* ===============================
Task 2 : Data Types
=============================== */

console.log('=============== Task 2: Data Types ===============');

let myString = "Hello JavaScript";
let myNumber = 10;
let myBoolean = true;
let myArray = ["Physics", "Chemistry", "Biology"];
let myObject = {
  name: "Soumik",
  age: 17,
  city: "Dhaka"
};

console.log("My String is:", myString);
console.log("My Number is:", myNumber);
console.log("My Boolean is:", myBoolean);
console.log("My Array is:", myArray);
console.log("My Object is:", myObject);

/* ===============================
Task 3 : Operators
=============================== */

console.log('=============== Task 3: Operators ===============');

let a = 20;
let b = 5;

console.log("1st number is:", a);
console.log("2nd number is:", b);
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

/* ===============================
Task 4 : Condition (if...else)
=============================== */

console.log('=============== Task 4: Condition (if...else) ===============');

let marks = 65;
console.log("Your Marks:", marks);

if (marks >= 50) {
  console.log("You have passed!");
} else {
  console.log("Sorry, You have failed.");
}

/* ===============================
Task 5 : switch-case
=============================== */

console.log('=============== Task 5: switch-case ===============');

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

/* ===============================
Task 6 : for Loop
=============================== */

console.log('=============== Task 6: for Loop ===============');
console.log('Printing numbers from 1 to 10 using for loop:');

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* ===============================
Task 7 : while Loop
=============================== */

console.log('=============== Task 7: while Loop ===============');
console.log('Printing numbers from 1 to 10 using while loop:');

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

/* ===============================
Task 8 : Array + for...of
=============================== */

console.log('=============== Task 8: Array + for...of ===============');

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

/* ===============================
Task 9 : Object + for...in
=============================== */

console.log('=============== Task 9: Object + for...in ===============');

let person = {
  name: "Soumik",
  age: 17,
  city: "Dhaka"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}

/* ===============================
Task 10 : Comments
=============================== */

// This is a single line comment

/*
This is a
multi line
comment
*/

/* ===============================
Task 11 : Function (Arguments)
=============================== */

console.log('=============== Task 11: Function (Arguments) ===============');

console.log("User's name is:", 'Rahim');
function greet(userName) {
  console.log("Hello " + userName + "!");
}

greet("Rahim");

/* ===============================
Task 13 : Returning Value
=============================== */

console.log('=============== Task 13: Returning Value ===============');

console.log("The selected numbers are 10 and 20");
function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(10, 20);
console.log("Sum of 10 and 20 is:", result);

console.log('');
console.log('End of the assignment. Thank you!');