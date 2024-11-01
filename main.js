// Display an alert with the message "hello"
window.alert("hello");

// Write HTML content to the document
document.write("<h1>hellow<span>from js file</span><h1>");

// Log a string with special characters to the console
console.log("'eng'abram \n \"emad\"");

// Log an error message to the console
console.error("error");

// Log a table of values to the console
console.table([10, 20, 30, "emad"]);

// Log the type of various values to the console
console.log(typeof "abram"); // string
console.log(typeof 50000); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (special case)
console.log(typeof undefined); // undefined
console.log(typeof [1, "k", 25]); // object (array)
console.log(typeof { name: "abram", age: 12 }); // object

// Declare variables and log their concatenated values
var $_ = "abram";
var _$ = "emad";
console.log($_ + " " + _$); // abram emad

// Log various arithmetic operations to the console
console.log(10 + "abram"); // 10abram (string concatenation)
console.log(20 + 60); // 80
console.log(20 - 60); // -40
console.log(10 - "abram"); // NaN (not a number)
console.log(20 * 65); // 1300
console.log(20 ** 20); // 104857600000000000000
console.log(20 / 2); // 10
console.log(100 % 3); // 1

// Log the result of unary plus operations
console.log(+null); // 0
console.log(+true); // 1

// Declare string variables and log a concatenated string
let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";
console.log(a + ' "" ' + "\\ " + b + " " + "\n" + c + " " + d);
console.log(`${a} " " // \\ ${b} \n${c} ${d}`);

// Variables and Concatenation Challenge
let title = "Abram";
let desc = "Eng Abram Emad";
let markup = `
<div id='markup'>
  <div class='1'>${title}<div>  
  <div class='2'>${desc}<div>
</div>`;
document.write(markup);

let Title = "Abram";
let Description = "Eng Abram Emad";
let date = "25/10";
let contant = `
<div id='contant'>
  <h3>Hello ${Title}</h3>
  <p>${Description}</p>
  <span>${date}</span>
</div>`;
document.write(contant.repeat(4));

// Declare variables and log the result of complex expressions
var A = 10;
var B = "20";
var C = 80;
console.log(++A + +B++ + +C++ - +A++);
console.log(++A + -B + +C++ - -A++ + +A);

// Declare variables and log the result of arithmetic operations
let D = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-D * +e); // 2000
console.log(-D + +e * 3.5 + f / 10); // 173

// Log various representations of the number 1000000
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);
console.log(1000000.563);

// Log various number properties and methods
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log((100).toString());
console.log((100.65).toString());
console.log((100.65).toString());
console.log((100.569655).toFixed(3));
console.log((100.568926).toFixed(2));
console.log(Number("100 abram"));
console.log(+"100 abram");
console.log(parseInt("100 abram"));
console.log(parseInt("abram 100 abram"));
console.log(parseInt("100.50 abram"));
console.log(parseFloat("abram 100 abram"));
console.log(parseFloat("100.500 abram"));
console.log(parseFloat("100 abram"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100));
console.log(Number.isInteger(100.659));
console.log(Number.isNaN("Abram / 100.659"));
console.log(Number.isNaN(100));

// Log various Math methods
console.log(Math.round(99.2));
console.log(Math.round(99.6));
console.log(Math.ceil(99.2));
console.log(Math.floor(99.6));
console.log(Math.max(10, 56, 86));
console.log(Math.min(10, 56, 86));
console.log(Math.pow(4, 2));
console.log(Math.random());
console.log(Math.trunc(99.6));

// Find the smallest number and return it as an integer
let t = 100;
let y = 2_00.5;
let u = 1e2;
let i = 2.4;
console.log(Math.min(t, y, u, i).toFixed(0));

// Use variables t and i to get the needed output
console.log(Math.pow(t, Math.trunc(i))); // 10000

// Get integer "2" from i variable with 4 methods
console.log(Math.round(i));
console.log(Math.trunc(i));
console.log(i.toFixed(0));
console.log(parseInt(i));

// Use variables y and i to get specific values
console.log((Math.floor(y) / Math.ceil(i)).toFixed(2)); // 66.67 (string)
console.log(Math.floor(y) / Math.ceil(i)); // 67 (number)
// Declare a string variable with extra spaces
let theName = "  Abram  ";

// Log the original string
console.log(theName);

// Log the character at index 2 (third character)
console.log(theName[2]);

// Log the character at index 6 (seventh character)
console.log(theName[6]);

// Log the character at index 2 using charAt method
console.log(theName.charAt(2));

// Log the character at index 6 using charAt method
console.log(theName.charAt(6));

// Log the length of the string
console.log(theName.length);

// Trim the extra spaces and log the result
console.log(theName.trim());

// Convert the string to uppercase and log the result
console.log(theName.toUpperCase());

// Convert the string to lowercase and log the result
console.log(theName.toLowerCase());

// Convert the character at index 3 to lowercase and log it
console.log(theName.charAt(3).toLowerCase());

// Find the index of the substring 'br' and log it
console.log(theName.indexOf("br"));

// Find the index of the substring 'br' starting from index 3 and log it
console.log(theName.indexOf("br", 3));

// Find the index of the character 'A' and log it
console.log(theName.indexOf("A"));

// Find the last index of the character 'A' and log it
console.log(theName.lastIndexOf("A"));

// Extract a substring from index 2 to 6 and log it
console.log(theName.slice(2, 6));

// Extract a substring from the end using negative indices and log it
console.log(theName.slice(-5, -3));

// Repeat the string 3 times and log the result
console.log(theName.repeat(3));

// Split the string by spaces and log the result
console.log(theName.split(" ", 3));

// Extract a substring from index 2 to 6 using substring method and log it
console.log(theName.substring(2, 6));

// Extract a substring from index 6 to 2 using substring method and log it
console.log(theName.substring(6, 2));

// Extract a substring from index -5 to 3 using substring method and log it
console.log(theName.substring(-5, 3));

// Extract a substring from the start to the end using substring method and log it
console.log(theName.substring(theName.length));

// Extract a substring from the start to the second last character using substring method and log it
console.log(theName.substring(0, theName.length - 1));

// Extract a substring from index 9 to the end using substring method and log it
console.log(theName.substring(9));

// Extract a substring from the fifth last to the third last character using substring method and log it
console.log(theName.substring(theName.length - 5, theName.length - 3));

// Extract a substring from index 6 to the end using substr method and log it
console.log(theName.substr(6));

// Extract a substring from the start to index 6 using substr method and log it
console.log(theName.substr(0, 6));

// Extract the last 3 characters using substr method and log it
console.log(theName.substr(-3));

// Extract a substring from the fifth last character with length 3 using substr method and log it
console.log(theName.substr(-5, 3));

// Check if the string includes "Abram" and log the result
console.log(theName.includes("Abram"));

// Check if the string includes "Abram" starting from index 8 and log the result
console.log(theName.includes("Abram", 8));

// Check if the string starts with "Abram" from index 2 and log the result
console.log(theName.startsWith("Abram", 2));

// Check if the string starts with spaces and log the result
console.log(theName.startsWith("  "));

// Check if the string ends with "m" at position 7 and log the result
console.log(theName.endsWith("m", 7));

// Check if the string ends with "m" and log the result
console.log(theName.endsWith("m"));

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let p = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(p.charAt(2).toUpperCase() + p.slice(3, 6)); // Zero

// 8 H
console.log(p.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(p.substring(0, 6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(p.substr(0, 7) + p.substr(11, 6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  `${p.charAt(0).toLowerCase()}${p.substring(1, p.length - 1).toUpperCase()}${p
    .substring(p.length - 1, p.length)
    .toLowerCase()}`
); // eLZERO WEB SCHOOl

// Comparison operations
console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

// Conditional statements
let price = 100;
let discount = "false";
let discountAmount = 30;
let country = "egypt";
let student = "true";

if (discount === "true") {
  price -= discountAmount;
} else if (country === "egypt") {
  if (student === "true") {
    price -= 40;
  } else {
    price -= 20;
  }
} else {
  price -= 10;
}
console.log(price);

// Ternary operator examples
let the_Name = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let theResult = theGender === "Male" ? "Mr" : "Mrs";
document.write(theResult);
console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hellow ${theGender === "Male" ? "Mr" : "Mrs"} ${the_Name}`);
theAge < 20
  ? console.log("smaller than 20")
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("greater than 60")
  : console.log("unknown");

// Boolean conversions
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(""));
console.log(Boolean(null));
// Declare a variable with initial value 0
let Price = 0;

// Log the price using logical OR (||) operator
console.log(`The Price is ${Price || 800}`); // The Price is 800

// Log the price using nullish coalescing (??) operator
console.log(`The Price is ${Price ?? 800}`); // The Price is 0

/*
  If Condition Challenge
*/

// Declare a variable with initial value 10
let app = 10;

// Check the value of app and log the appropriate message
if (app < 10) {
  console.log(10);
} else if (app >= 10 && app <= 40) {
  console.log("10 To 40");
} else if (app > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Rewrite the previous condition using ternary operator
app < 10
  ? console.log("10")
  : app >= 10 && app <= 40
  ? console.log("10 to 40")
  : app > 40
  ? console.log("> 40")
  : console.log("unknown");

// String manipulation and comparison
var st = "Elzero Web School";

// Check if the first 6 characters are not equal to the first 7 characters
if (st.substring(0, 6) !== st.substr(0, 7)) {
  console.log("Good");
}

// Check if the length of the string multiplied by 2 is equal to "34"
if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

// Check if concatenating the first 6 characters twice equals "ElzeroElzero"
if (`${st.substring(0, 6)}${st.substring(0, 6)}` === "ElzeroElzero") {
  console.log("Good");
}

// Check if the character at the position of 'W' is 'w'
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

/*
  Switch Challenge
*/

// Declare a variable for job and initialize salary
let job = "Manager";
let salary = 0;

// Determine salary based on job using if-else statements
if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// Determine salary based on job using switch statement
switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}

/*
  If Challenge
*/

// Declare variables for holidays and money
let holidays = 0;
let money = 0;

// Determine money based on holidays using switch statement
switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

// Determine money based on holidays using if-else statements
if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
// Declare an array with nested arrays
let familyName = ["Abram", "Emad", ["Mhrous", "sehata"]];

// Log the first element of the array
console.log(`${familyName[0]}`); // Abram

// Log a greeting with the first element of the array
console.log(`Hellow ${familyName[0]}`); // Hellow Abram

// Log the second character of the first element
console.log(`${familyName[0][1]}`); // b

// Log the first character of the second element in the nested array
console.log(`${familyName[2][1][0]}`); // s

// Log the entire array
console.log(familyName);

// Change the third element to a string and log the array
familyName[2] = "Mhrous";
console.log(familyName);

// Change the third element back to an array and log the array
familyName[2] = ["Mhrous", "sehata"];
console.log(familyName);

// Check if familyName is an array and log the result
console.log(Array.isArray(familyName)); // true

// Log the length of the array
console.log(familyName.length); // 3

// Add an element to the beginning of the array and log the array
familyName.unshift("Kyan");
console.log(familyName);

// Add an element to the end of the array and log the array
familyName.push("Roman");
console.log(familyName);

// Remove the first element and log the removed element and the array
let first = familyName.shift();
console.log(first); // Kyan
console.log(familyName);

// Remove the last element and log the removed element and the array
let last = familyName.pop();
console.log(last); // Roman
console.log(familyName);

// Find the index of "Abram" and log it
console.log(familyName.indexOf("Abram")); // 0

// Find the index of "Abram" starting from index 0 and log it
console.log(familyName.indexOf("Abram", 0)); // 0

// Find the last index of "Emad" and log it
console.log(familyName.lastIndexOf("Emad")); // 1

// Find the last index of "Emad" starting from index 2 and log it
console.log(familyName.lastIndexOf("Emad", 2)); // 1

// Check if "Emad" is included in the array and log the result
console.log(familyName.includes("Emad")); // true

// Check if "Emad" is included in the array starting from index 1 and log the result
console.log(familyName.includes("Emad", 1)); // true

// Check if "Kyan" is not found in the array and log a message
if (familyName.indexOf("Kyan") === -1) {
  console.log("Not Found");
}

// Log the index of "Kyan" (not found)
console.log(familyName.indexOf("Kyan")); // -1

// Log the last index of "Kyan" (not found)
console.log(familyName.lastIndexOf("Kyan")); // -1

// Reverse the array and log it
console.log(familyName.reverse());

// Sort the array and log it
console.log(familyName.sort());

// Log the array
console.log(familyName);

// Slice the array and log the result
console.log(familyName.slice());

// Slice the array from index 1 and log the result
console.log(familyName.slice(1));

// Slice the array from index 1 to 2 and log the result
console.log(familyName.slice(1, 2));

// Slice the array from the last element and log the result
console.log(familyName.slice(-1));

// Slice the array from index 1 to the second last element and log the result
console.log(familyName.slice(1, -2));

// Slice the array from the second last to the last element and log the result
console.log(familyName.slice(-2, -1));

// Log the array
console.log(familyName);

// Splice the array to replace elements and log the result
familyName.splice(1, 2, "Sameer", "Samara");
console.log(familyName);

// Declare another array
let motherFamily = ["Grandmother", "Grandfather", "Counsin"];
console.log(motherFamily);

// Concatenate arrays and log the result
let allFamily = familyName.concat(motherFamily, "Gamal", [5, 58, 98]);
console.log(allFamily);

// Join the array elements into a string and log the result
console.log(allFamily.join());
console.log(allFamily.join("  "));
console.log(allFamily.join(" | "));

/*
  Array Challenge
*/

// Declare variables
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Slice, reverse, and log the array
console.log(my.slice(zero, -my.length / counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

// Slice, reverse, and log the array
console.log(my.slice(my.length / my.length, counter).reverse()); // ["Elham", "Mazero"]

// Slice, reverse, join, slice, and log the result
console.log(
  `"${my
    .slice(my.length / my.length, counter)
    .reverse()
    .join("")
    .slice(0, 2)}${my
    .slice(my.length / my.length, counter)
    .reverse()
    .join("")
    .slice(7)}"`
); // "Elzero"

// Slice, join, slice, and log the result
console.log(
  `"${my
    .slice(my.length / my.length, -my.length / counter)
    .join("")
    .slice(4, 5)}${my
    .slice(my.length / my.length, -my.length / counter)
    .join("")
    .slice(5, 6)
    .toUpperCase()}"`
); // "rO"

// Loop through numbers and log them
for (i = 0; i < 10; i++) {
  console.log(i);
}

// Declare an array with mixed types
let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// Filter only names and log them
let onlyNames = [];
for (i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    console.log(onlyNames.push(myFriends[i]));
  }
}
console.log(onlyNames);

// Declare arrays for products, colors, and models
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

// Loop through products and log details
for (i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log(`* ${"Colors "}`);
  for (j = 0; j < colors.length; j++) {
    console.log(`  - ${colors[j]}`);
  }
  console.log(`* ${"Models "}`);
  for (l = 0; l < models.length; l++) {
    console.log(`  - ${models[l]}`);
  }
}

// Nested loops with labels
mainLoop: for (i = 0; i < products.length; i++) {
  console.log(`# ${products[i]}`);
  nestedLoop: for (j = 0; j < colors.length; j++) {
    console.log(`  - ${colors[j]}`);
    if (colors[j] === "Green") {
      break nestedLoop;
    }
  }
}
/*
let firstIndex = 0;
let secondIndex = 0;
mainLoop: for(;;) {
  console.log(`# ${products[firstIndex]}`);
  firstIndex++;
  nestedLoop: for(;;) {
    console.log(`# ${colors[secondIndex]}`);
    secondIndex++;
    if (secondIndex === colors.length) {
      if (colors[secondIndex] === "Green") break nestedLoop;
    }
  }
  if (firstIndex === products.length) { break; }
}
*/

// Display the number of products to show
document.write(`<h1>Show ${showCount} Products</h1>`);

// Loop through the products and display them
for (i = 0; i < showCount; i++) {
  document.write("<div>");
  document.write(`<h2>${i + 1} - ${products[i]}</h2>`);
  for (j = 0; j < colors.length; j++) {
    document.write(`<p>  - ${colors[j]}</p>`);
  }
  document.write(`<p>  - ${colors.join(" | ")}</p>`);
  document.write("</div>");
}

// Loop through the products using a while loop
let index = 0;
while (index < products.length) {
  console.log(products[index]);
  index++;
}

// Use a do-while loop to log the index
do {
  console.log(index);
  index++;
} while (false);
console.log(index);

/*
  Loop Challenge
*/

// Declare arrays for admins and employees
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

// Filter admins until "Stop" and display them
let theTitle = [];
let fixedNumber = 1;
for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  theTitle.push(myAdmins[i]);
}
document.write(`<div>We Have ${theTitle.length} Admins</div>`);
for (i = 0; i < theTitle.length; i++) {
  document.write("<hr>");
  document.write(`<div>The Admin for team ${i + 1} is :- ${theTitle[i]}`);
  document.write("<h3>Team Members:-</h3>");
  for (j = 0; j < myEmployees.length; j++) {
    if (theTitle[i].charAt(0) === myEmployees[j].charAt(0)) {
      document.write(`<p> ${fixedNumber++} - ${myEmployees[j]}</p>`);
    }
  }
  document.write("</div>");
}

// Function to say hello with default parameters
function sayHello(username = "Unknown", age = "Unknown") {
  return `Hello ${username} Your Age Is ${age}`;
}
console.log(sayHello("Abram", 21));

// Function to greet based on age
function sayHellow(username = "Unknown", age = "Unknown") {
  if (age < 20) {
    console.log("your age isn't suitable for this application");
  } else {
    console.log(`Hi ${username} your age is ${age}`);
  }
}
sayHellow("Abram", 21);
sayHellow("Ahmed", 18);

// Function to generate years excluding a specific year
function generateYears(start, end, exclude) {
  for (i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(2000, 2021, 2016);

// Function to generate numbers until a specific number
function generate(start, end) {
  for (i = start; i <= end; i++) {
    if (i === 15) {
      return "interrupting";
    }
    console.log(i);
  }
}
generate(1, 20);

// Function to calculate the sum of numbers
function calc(...numbers) {
  let result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `final result is:- ${result}`;
}
console.log(calc(2, 89, 96, 556, 5));

// Function to show user info with optional skills
function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write("<div>");
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Your age is:- ${ag}</p>`);
  document.write(`<p>Your rate is:- $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Your skills are:- ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>No skills</p>`);
    }
  } else {
    document.write(`<p>Skills are hidden</p>`);
  }
  document.write("</div>");
}
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let name, age, status;
  [a, b, c].forEach((param) => {
    typeof param === "string"
      ? (name = param)
      : typeof param === "number"
      ? (age = param)
      : typeof param === "boolean"
      ? (status = param)
      : null;
  });
  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? "Available" : "Not Available"
    } For Hire`
  );
}

showDetails("Abram", 21, true); // Hello Abram, Your Age Is 21, You Are Available For Hire

// Arrow function to display a message
let sayMessage = (firstName = "Unknown", lastName = "Unknown") => {
  let message = "Hello";
  let contactMessage = () => {
    let getFullName = () => {
      return `${firstName} ${lastName}`;
    };
    return `${message} ${getFullName()}`;
  };
  return `${contactMessage()}`;
};
console.log(sayMessage("Abram", "Emad")); // Hello Abram Emad

// Variable scope demonstration
var alb = 1;
let bla = 2;

function showText() {
  var alb = 10;
  let bla = 20;
  console.log(`Function - From Local ${alb}`); // 10
  console.log(`Function - From Local ${bla}`); // 20
}

console.log(`From Global ${alb}`); // 1
console.log(`From Global ${bla}`); // 2

showText();

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`); // 50
}

console.log(`From Global ${x}`); // 10

function parent() {
  let a = 10;

  function child() {
    console.log(a); // 10
    function grand() {
      let bld = 100;
      console.log(`From Grand ${a}`); // 10
      console.log(`From Grand ${bld}`); // 100
    }
    grand();
  }
  child();
}
parent();

/*
  Arrow Function Challenges
*/

// Convert to arrow function
let names = (...NameS) => `String [${NameS.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// Replace ??? in return statement to get the output
let myNumbers = [20, 50, 10, 60];

let calcs = (one, two, ...nums) => `${one + two + nums[0]}`;

console.log(calcs(myNumbers[2], myNumbers[1], myNumbers[0])); // 80

// Array manipulation using map
let myNums = [1, 2, 3, 4, 5, 6];

let addSelf = myNums.map((e) => e + e);
console.log(addSelf); // [2, 4, 6, 8, 10, 12]

// Swapping cases in a string
let swappingCases = "aBRAm";

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(sw); // Abram

// Inverting numbers in an array
let invertedNumbers = [1, -10, -20, 15, 100, -30];

let inv = invertedNumbers.map((a) => -a);
console.log(inv); // [-1, 10, 20, -15, -100, 30]

// Ignoring numbers in a string
let ignoreNumbers = "Ab123ra4m";

let ign = ignoreNumbers
  .split("")
  .map((i) => (isNaN(parseInt(i)) ? i : ""))
  .join("");
console.log(ign); // Abram
// Filter friends whose names start with "A"
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filteredFriends = friends.filter((A) => A.startsWith("A"));
console.log(filteredFriends); // ["Ahmed", "Asmaa", "Amgad"]

// Filter even numbers from the array
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter((ele) => ele % 2 === 0);
console.log(evenNumbers); // [20, 2, 10]

// Map to double the values in myNums array
let addMap = myNums.map((ele) => ele + ele);
console.log(addMap); // [2, 4, 6, 8, 10, 12]

// Filter myNums array (all elements are truthy so no change)
let addFilter = myNums.filter((ele) => ele + ele);
console.log(addFilter); // [1, 2, 3, 4, 5, 6]

// Filter words with length <= 4 from the sentence
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
  .split(" ")
  .filter((ele) => ele.length <= 4)
  .join(" ");
console.log(smallWords); // "I Love Code Too Much"

// Filter out numbers from the string
let ignoreNumber = "Ab123ra4m";
let ignLetters = ignoreNumber.split("").filter((ele) => !isNaN(parseInt(ele)));
console.log(ignLetters); // ["1", "2", "3", "4"]

// Filter out letters from the string
let ignNums = ignoreNumber
  .split("")
  .filter((ele) => isNaN(parseInt(ele)))
  .join("");
console.log(ignNums); // "Abram"

// Square the numbers in the mixed string
let mix = "A13BS2ZX";
let mixedContent = mix
  .split("")
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => ele * ele)
  .join("");
console.log(mixedContent); // "1494"

// Use reduce to sum the numbers in the array
let nums = [10, 20, 15, 30];
let add = nums.reduce(function (acc, current, index, array) {
  console.log(`The Accumulator is: ${acc}`);
  console.log(`The Current is: ${current}`);
  console.log(`The Index is: ${index}`);
  console.log(`The Array is: ${array}`);
  console.log(`The Accumulator + Current = ${acc + current}`);
  console.log(`#################################`);
  return acc + current;
}, 5);
console.log(add); // 80

// Find the longest string in the array
let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];
let check = theBiggest.reduce(function (acc, current) {
  console.log(`The Accumulator is: ${acc}`);
  console.log(`The Current is: ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#################################`);
  return acc.length > current.length ? acc : current;
});
console.log(check); // "Propaganda_Two"

// Remove "@" characters and join the array into a string
let removeChars = ["A", "@", "@", "b", "r", "@", "@", "a", "@", "m"];
let finalString = removeChars
  .filter((ele) => ele !== "@")
  .reduce((acc, current) => `${acc}${current}`);
console.log(finalString); // "Abram"

// Add click event to list items to toggle active class and hide divs
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain
*/

let myString = "1,2,3,AA,b,r,a,m,_,E,m,a,d,_,M,a,h,r,o,u,2,0,s,S";

let solution = myString
  .split("")
  .filter((ele) => isNaN(parseInt(ele)) && ele !== ",")
  .map((ele) => (ele === "_" ? " " : ele))
  .reduce((acc, current) => `${acc}${current}`)
  .slice(1, 19);

console.log(solution); // "Abram Emad Mahrous"
// Declare a variable for availability
let Avaliablity = true;
let myCountry = "country";

// Create a user object with properties and methods
let user = {
  // Properties
  name: "Abram",
  age: 21,
  country: "Egypt",
  addresses: {
    usa: "Newyork",
    egypt: {
      first: "Minya",
      second: "Mallawi",
    },
  },
  skills: ["HTML", "CSS", "JavaScript"],
  Avaliablity: false,
  // Methods
  functionality: () => `Hello`,
  checkAv: () => {
    if (Avaliablity === true) {
      return `I'am Avaliable for work`;
    } else {
      return `I'am not Avaliable for work`;
    }
  },
  ageIndays: function () {
    console.log(this);
    return this.age * 365;
  },
};

// Accessing properties and methods of the user object
console.log(user.name); // Abram
console.log(user["name"]); // Abram
console.log(user[myCountry]); // undefined
console.log(user.country); // Egypt
console.log(user["country"]); // Egypt
console.log(user.functionality()); // Hello
console.log(user.checkAv()); // I'am not Avaliable for work
console.log(user.skills); // ["HTML", "CSS", "JavaScript"]
console.log(user.skills[2]); // JavaScript
console.log(user.skills.join(" | ")); // HTML | CSS | JavaScript
console.log(user.addresses.usa); // Newyork
console.log(user["addresses"]["usa"]); // Newyork
console.log(user.addresses.egypt); // { first: "Minya", second: "Mallawi" }
console.log(user["addresses"]["egypt"]); // { first: "Minya", second: "Mallawi" }
console.log(user["addresses"]["egypt"]["first"]); // Minya
console.log(user["addresses"]["egypt"]["second"]); // Mallawi
console.log(user.ageIndays()); // 7665

// Create a new user object using Object constructor
let newUser = new Object({
  name: "Emad",
  age: 50,
  sayHello: function () {
    console.log(this);
    return this;
  },
  doubleAge: function () {
    return this.age * 2;
  },
});
newUser["Country"] = "Egypt";
console.log(newUser);
console.log(newUser.name); // Emad
console.log(newUser.Country); // Egypt
console.log(newUser.age); // 50
console.log(newUser.doubleAge()); // 100

// Create an object using Object.create
let obj = Object.create({});
obj["age"] = 21;

let newObj = Object.create(newUser);
newObj.age = 21;

console.log(obj); // { age: 21 }
console.log(newObj.age); // 21
console.log(newObj.doubleAge()); // 42

// Global context demonstration
console.log(this); // Window object
console.log(this === window); // true

myVar = 100;
console.log(window.myVar); // 100
console.log(this.myVar); // 100

console.log(sayHello() === window); // true

// Object.assign demonstration
let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
finalObject.prop1 = 200;
finalObject.prop3 = 300;
console.log(finalObject); // { prop1: 200, prop3: 300, prop2: 2, meth1: [Function: meth1], meth2: [Function: meth2] }

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
console.log(newObject); // { prop1: 1, meth1: [Function: meth1], prop5: 5, prop6: 6 }

// DOM manipulation
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagElement = document.getElementsByTagName("p");
console.log(myTagElement[0]);
console.log(myTagElement[0].textContent);

let myClassName = document.getElementsByClassName("my-span");
console.log(myClassName);

let myQuarryElement = document.querySelector(".my-span");
console.log(myQuarryElement);

let myQuarryAllElement = document.querySelectorAll(".my-span");
console.log(myQuarryAllElement);
console.log(myQuarryAllElement[0]);

let myElement = document.querySelector(".my-child-div");
console.log(myElement.innerHTML);
console.log(myElement.classList);
console.log(myElement.classList.contains("my-child-div"));
console.log(myElement.classList.item(0));

myIdElement.style.background = "black";
myIdElement.style.cssText = "display: block; font-weight: bold;";
myIdElement.style.setProperty("padding", "20px");
myElement.style.setProperty("color", "red");

let newP = document.createElement("p");
myIdElement.before("Starting a new div");
myIdElement.after("Ending div");
myIdElement.append(newP);
myIdElement.prepend(newP);
myIdElement.append(newP);

console.log(myIdElement.nextSibling);
console.log(myIdElement.previousSibling);
console.log(myIdElement.nextElementSibling);
console.log(myIdElement.previousElementSibling);
console.log(myIdElement.parentElement);
// Event listener for onload event
myElement.onload = function () {
  myElement.parentElement.style.setProperty("color", "red");
};

// Event listener for onclick event
myElement.onclick = function () {
  myElement.classList.toggle("show");
};

// Set and get attributes for a link element
let myLink = document.querySelector(".myLink");
myLink.setAttribute("href", "#");
console.log(myLink.getAttribute("href")); // "#"

// Set innerHTML and textContent for an element
myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

console.log(myElement.innerHTML); // "Text From <span>Main.js</span> File"
console.log(myElement.textContent); // "Text From <span>Main.js</span> File"

// Modify attributes of the first image element
document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

console.log(document.images[0]);

// Log document title and body
console.log(document.title);
console.log(document.body);

/*
if (myTagElement.hasAttribute("data-src")) {
  if (myTagElement.getAttribute("data-src") === "") {
    myTagElement.removeAttribute("data-src");
  } else {
    myTagElement.setAttribute("data-src", "New Value");
  }
} else {
  console.log("Not Found");
}
if (myIdElement.hasAttribute()) {
  console.log("Has Attribute");
} else {
  console.log("Has Not Attribute");
}
*/

// Create a new element with attributes and text
let myNewElement = document.createElement("div");
let myAttr = document.createAttribute("data-section");
let myText = document.createTextNode("product details");
let myComment = document.createComment("// Hello from testing");

myNewElement.className = "parent div";
myNewElement.setAttributeNode(myAttr);
myNewElement.setAttribute("main-data", "first");

myNewElement.appendChild(myComment);
myNewElement.appendChild(myText);

document.body.appendChild(myNewElement);

// Create a main element with heading and paragraph
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myPragraph = document.createElement("p");
let hTextNode = document.createTextNode("testing dom now");
let pTextNode = document.createTextNode("we are testing dom now");

myHeading.appendChild(hTextNode);
myPragraph.appendChild(pTextNode);

myMainElement.appendChild(myHeading);
myMainElement.appendChild(myPragraph);

myMainElement.className = "testing-dom";

document.body.appendChild(myMainElement);

// Accessing and logging child elements
let myTestingElement = document.getElementsByTagName("div")[0];
console.log(myTestingElement);
console.log(myTestingElement.children);
console.log(myTestingElement.children[0]);
console.log(myTestingElement.childNodes);
console.log(myTestingElement.childNodes[0]);
console.log(myTestingElement.firstChild);
console.log(myTestingElement.lastChild);
console.log(myTestingElement.firstElementChild);
console.log(myTestingElement.lastElementChild);

// Form validation
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
document.forms[0].onsubmit = function (ele) {
  let validAge = false;
  let validUserName = false;
  if (userInput.value !== "" && userInput.value.length <= 10) {
    validUserName = true;
  }
  if (ageInput.value !== "") {
    validAge = true;
  }
  if (!validUserName || !validAge) {
    ele.preventDefault();
  }
};

// Focus on user input on window load
window.onload = function () {
  userInput.focus();
};

// Focus on age input when user input loses focus
userInput.onblur = function () {
  ageInput.focus();
};

// Create and clone a new paragraph element
let myNewP = document.createElement("p");
let newPtext = document.createTextNode("Artist Abram");
myNewP.appendChild(newPtext);
myNewP.id = "new-p";
document.body.prepend(myNewP);

let pCloned = document.getElementById("new-p").cloneNode(true);
pCloned.id = `${pCloned.id}-Cloned`;
myNewP.appendChild(pCloned);
/*
myNewP.onclick = function () {
  let myNewp = myNewP.cloneNode(true);
  myNewp.className = `${myNewP.className}-Cloned`;
  document.body.appendChild(myNewp);
}
document.addEventListener("click", function (e) {
  if (e.target.className === "Cloned") {
    console.log("I'am Clone");
  }
});
*/

// Change the document title
window.document.title = "test";

// Confirm dialog
let confMsg = confirm("Are you sure");
console.log(confMsg);
if (confMsg === true) {
  console.log("Item Deleted");
} else {
  console.log("Item Not Deleted");
}

// Prompt dialog
let prompMsg = prompt("Good day to you", "write the day with 3 characters");
console.log(prompMsg);

// Set timeout to log a message after 3 seconds
setTimeout(() => {
  console.log("Msg");
}, 3000);

// Set timeout to call sayMsg function after 3 seconds
setTimeout(sayMsg, 3000);
function sayMsg() {
  console.log("I'am Message");
}

// Set timeout to call sayMg function with arguments after 3 seconds
setTimeout(sayMg, 3000, "Abram", 21);
function sayMg(name, age) {
  console.log(`I'am Message for the user: ${name} which his age is ${age}`);
}

// Clear timeout on button click
let btn = document.getElementsByClassName("btn");
btn.onclick = () => {
  clearTimeout(count);
};
let count = setTimeout(sayMs, 3000, "Abram", 21);
function sayMs(name, age) {
  console.log(`I'am Message for the user: ${name} which his age is ${age}`);
}

// Set interval to log a message every 3 seconds
setInterval(() => {
  console.log("Msg");
}, 3000);

// Set interval to call sayM function every 3 seconds
setInterval(sayM, 3000);
function sayM() {
  console.log("I'am Message");
}

// Set interval to call sayMsge function with arguments every 3 seconds
setInterval(sayMsge, 3000, "Abram", 21);
function sayMsge(name, age) {
  console.log(`I'am Message for the user: ${name} which his age is ${age}`);
}

// Countdown function
let counting = document.getElementsByClassName("counting");
function sayMsgr() {
  counting.innerHTML -= 1;
  if (counting.innerHTML === "0") {
    clearTimeout(coun);
  }
}
let coun = setInterval(sayMsgr, 3000);

// Log location properties
console.log(location);
console.log(location.href);
console.log(location.hash);
console.log(location.hostname);
console.log(location.host);
console.log(location.protocol);

// Open a new window after 3 seconds
setTimeout(function () {
  window.open(
    "https://google.com",
    "_blank",
    "width=200px,height=300px,top=20px,right=20px"
  );
}, 3000);

// Log history properties
console.log(history);
console.log(history.length);
// console.log(history.back());
// console.log(history.forward());
// console.log(history.go());

// Scroll to a specific position
window.scrollTo({
  left: 500,
  top: 320,
  behavior: "smooth",
});

// Scroll by a specific amount
window.scrollBy({
  left: 500,
  top: 320,
  behavior: "smooth",
});

/*
let goTo = document.getElementsByClassName("up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    goTo.style.display = "block";
  } else {
    goTo.style.display = "none";
  }
};
goTo.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
*/
// Set localStorage items
// window.localStorage.setItem("color", "#ddd");
window.localStorage.fontSize = "20px";
window.localStorage["fontWeight"] = "bold";

// Remove an item from localStorage
window.localStorage.removeItem("fontSize");

console.log(window.localStorage.key[0]);
console.log(window.localStorage);
console.log(typeof window.localStorage);

// document.body.style.backgroundColor = window.localStorage.getItem("color");

// Handle color change based on localStorage
let lis = document.querySelectorAll("ul.exp li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  exp.style.backgroundColor = window.localStorage.getItem("color");
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

// Set sessionStorage item
window.sessionStorage.setItem("color", "blue");

// Handle input blur event
let iName = (document.querySelector(".name").onblur = function () {
  console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
});

// Task management with localStorage
let inputTask = document.querySelector("input.input");
let tasks = document.querySelector(".tasks");
let adds = document.querySelector("input.add");
let storedTasks = localStorage.getItem("task"); // uncomment on your server
let allTasks = storedTasks ? JSON.parse(storedTasks) : [];

// Show tasks function
function showTasks() {
  tasks.innerHTML = allTasks
    .map(
      (task) =>
        `<p class="task">${task.inputTitle} <button class="delete" data-id="${task.id}">Close</button></p>`
    )
    .join("");
}

// Add tasks
adds.onclick = function () {
  let inputTitle = inputTask.value;
  if (inputTitle !== "") {
    let id = Math.random();
    let Completed = false;
    allTasks.push({ id, inputTitle, Completed });
    localStorage.setItem("task", JSON.stringify(allTasks));
    inputTask.value = "";
    showTasks();
  }
};

showTasks();

// Delete task function
tasks.addEventListener("click", function (e) {
  let toGetTarget = e.target;
  if (toGetTarget.classList.contains("delete")) {
    let taskIds = toGetTarget.dataset.id;
    allTasks = allTasks.filter((item) => item.id != taskIds);
    toGetTarget.closest("p").remove();
    localStorage.setItem("task", JSON.stringify(allTasks));
  }
});

// Toggle task completion
let task = document.querySelectorAll("p.task");
task.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    task.forEach((ele) => {
      ele.classList.remove("done");
    });
    e.currentTarget.classList.toggle("done");
  });
});

// Destructuring arrays
let v = 1;
let n = 2;
let U = 3;
let m = 4;

let myFriend = [
  "Ahmed",
  "Sayed",
  "Ali",
  "Maysa",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

[v = "V", n, U, m] = myFriend;

console.log(v); // Ahmed
console.log(n); // Sayed
console.log(U); // Ali
console.log(m); // Maysa
console.log(myFriend[4][2][1]); // Gamal

let [s, , r] = myFriend;
let [, , , , [, , [, I]]] = myFriend;

console.log(I); // Gamal
console.log(s); // Ahmed
console.log(r); // Ali

// Swapping variables
let book = "Video";
let video = "Book";

[book, video] = [video, book];
console.log(book); // Book
console.log(video); // Video

// Destructuring objects
const use = {
  theNam: "Osama",
  theAg: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColo: "Black",
  skil: {
    html: 70,
    css: 80,
  },
  skilledIn: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const { theNam, theAg } = use;
console.log(theAg); // 39
console.log(theNam); // Osama

const {
  theAg: na,
  theNam: an,
  theColo: co = "red",
  skil: { html: h, css },
  skilledIn: [, , three],
} = use;
console.log(na); // 39
console.log(an); // Osama
console.log(co); // Black
console.log(h); // 70
console.log(css); // 80
console.log(three); // JavaScript
// Destructuring object properties
const { html: skillOne, css: skillTwo } = use.skil;

console.log(`My HTML Skill Progress Is ${skillOne}`); // My HTML Skill Progress Is 70
console.log(`My CSS Skill Progress Is ${skillTwo}`); // My CSS Skill Progress Is 80

// Function to show details using destructuring
function showDetail({
  theAg: na,
  theNam: an,
  theColo: co = "red",
  skil: { html: skillOne, css: skillTwo },
} = use) {
  console.log(`My HTML Skill Progress Is ${skillOne}`); // My HTML Skill Progress Is 70
  console.log(`My CSS Skill Progress Is ${skillTwo}`); // My CSS Skill Progress Is 80
}

showDetail(use);

/*
  Destructuring Challenge
*/

let chosen = 3;

let myFrien = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  let [
    {
      title,
      age,
      available,
      skills: [, Z],
    },
    ,
  ] = myFrien;
  console.log(`My name is ${title}`);
  console.log(`My age is ${age}`);
  console.log(
    available ? "I'am Avaliable for work" : "I'am Not Avaliable for work"
  );
  console.log(`My Skills is ${Z}`);
} else if (chosen === 2) {
  let [
    ,
    {
      title,
      age,
      available,
      skills: [, Z],
    },
  ] = myFrien;
  console.log(`My name is ${title}`);
  console.log(`My age is ${age}`);
  console.log(
    available ? "I'am Avaliable for work" : "I'am Not Avaliable for work"
  );
  console.log(`My Skills is ${Z}`);
} else if (chosen === 3) {
  let [
    ,
    ,
    {
      title,
      age,
      available,
      skills: [, Z],
    },
  ] = myFrien;
  console.log(`My name is ${title}`);
  console.log(`My age is ${age}`);
  console.log(
    available ? "I'am Avaliable for work" : "I'am Not Avaliable for work"
  );
  console.log(`My Skills is ${Z}`);
}

// Working with Sets
let myData = [1, 1, 1, 2, 3, "A"];
let myUniqData = new Set([1, 1, 1, 2, 3, "A"]);
let myUniqDat = new Set(myData);
let myUniqDa = new Set().add(1).add(1).add(1).add(2).add(3).add("A");

console.log(myData); // [1, 1, 1, 2, 3, "A"]
console.log(myUniqData); // Set { 1, 2, 3, "A" }
console.log(myUniqDat); // Set { 1, 2, 3, "A" }
console.log(myUniqDa); // Set { 1, 2, 3, "A" }
console.log(myData[0]); // 1
console.log(myUniqData[0]); // undefined (Sets do not support indexing)
console.log(myUniqData.size); // 4
console.log(myUniqData.delete(2)); // true
myUniqData.add(0);
console.log(`MyUniqData has A :- ${myUniqData.has("a".toUpperCase())}`); // true

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet); // Set { 1, 2, 3, "A" }
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`); // 4

let iterator = mySet.keys();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // "A"
console.log(iterator.next()); // { value: undefined, done: true }

mySet.forEach((ele) => console.log(ele)); // 1, 2, 3, "A"
console.log("#".repeat(20)); // ####################

let myWeakSet = new WeakSet([{ A: 1, B: 1 }]);
console.log(myWeakSet); // WeakSet { { A: 1, B: 1 } }

let myNewObject = {
  10: "Number",
  10: "String",
};
// Creating and using a Map
let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10)); // "Number"
console.log(myNewMap.get("10")); // "String"
console.log(myNewMap.get(true)); // "Boolean"
console.log("#".repeat(20));
console.log(myNewObject);
console.log(myNewMap);

// Creating a Map with an array of key-value pairs
let myMap = new Map([
  [10, "Number"],
  ["10", "String"],
  [false, "Boolean"],
  ["Name", "Abram"],
]);

console.log(myMap);
console.log(myMap.get(10)); // "Number"
console.log(myMap.get("10")); // "String"
console.log(myMap.get(false)); // "Boolean"
console.log("#".repeat(20));
console.log(myMap.has("Name")); // true
console.log("#".repeat(20));
console.log(myMap.size); // 4
console.log(myMap.delete("Name")); // true

// Using WeakMap
let wMap = { nams: "Abram" };
let myWeakMap = new WeakMap();
myWeakMap.set(wMap, "Abram Emad");

// Using Array.from
console.log(Array.from("Abram")); // ["A", "b", "r", "a", "m"]
console.log(Array.from("123456", (e) => +e + +e)); // [2, 4, 6, 8, 10, 12]

// Using Set to remove duplicates
let myArray = [1, 1, 1, 2, 3, 4];
let myArraySet = new Set(myArray);
console.log(Array.from(myArraySet)); // [1, 2, 3, 4]
console.log(...new Set(myArray)); // 1 2 3 4

// Function to convert arguments to array
function af(...args) {
  return Array.from(args);
}
console.log(af("Abram", "Emad", 1, 2, 3)); // ["Abram", "Emad", 1, 2, 3]

// Using copyWithin
let myArr = [10, 20, 30, 40, 50, "A", "B"];
console.log(myArr.copyWithin(3)); // [10, 20, 30, 10, 20, 30, 40]
console.log(myArr.copyWithin(4, 6)); // [10, 20, 30, 10, 40, 30, 40]
console.log(myArr.copyWithin(4, -1)); // [10, 20, 30, 10, 40, 30, 40]
console.log(myArr.copyWithin(1, -2)); // [10, 40, 30, 10, 40, 30, 40]
console.log(myArr.copyWithin(1, -2, -1)); // [10, 40, 30, 10, 40, 30, 40]

// Using some method
let Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNumber = 10;

let Check = Nums.some(function (ele) {
  return ele > this;
}, myNumber);
console.log(Check); // false

function checkValues(arr, val) {
  return arr.some(function (ele) {
    return ele === val;
  });
}
console.log(checkValues(Nums, 20)); // false
console.log(checkValues(Nums, 5)); // true

let range = {
  min: 10,
  max: 20,
};

let checkNumberINRang = Nums.some(function (ele) {
  return ele >= this.min && ele <= this.max;
}, range);
console.log(checkNumberINRang); // true

// Using every method
const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);
let objectLocation = locationsArray.map((ele) => +ele);

let checkObject = objectLocation.every(function (ele) {
  return this > ele;
}, mainLocation);

console.log(checkObject); // false

// Using spread operator
console.log("Abram");
console.log(..."Abram"); // A b r a m
console.log([..."Abram"]); // ["A", "b", "r", "a", "m"]

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays); // [1, 2, 3, 4, 5, 6]

let copiedArray = [...myArray1];
console.log(copiedArray); // [1, 2, 3]

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);
console.log(allFriends); // ["Osama", "Ahmed", "Sayed", "Sameh", "Mahmoud"]

let myNum = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNum)); // 1000

// Merging objects using spread operator
let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};
console.log({ ...objOne, ...objTwo, Name: "Abram" }); // { a: 1, b: 2, c: 3, d: 4, Name: "Abram" }
/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Challenge solution
console.log(Math.max(...new Set(n1)) * [...n1, ...n2].length); // 210

// Regular expressions
let myStr = "Hello JavaScript I Love javascript";
let regex = /javascript/gi;
console.log(myStr.match(regex)); // ["JavaScript", "javascript"]

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe)); // ["Org", "Info", "Io"]

let number_s = "12345678910";
let numsRe = /[0-2]/g;
console.log(number_s.match(numsRe)); // ["1", "2", "1", "0"]

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe)); // ["3", "4", "5", "6", "7", "8", "9", "1", "0"]

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe)); // ["!", "@", "#", "$", "%"]

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /os[5-9]os/gi;
console.log(practice.match(practiceRe)); // ["Os8Os"]

let mySt = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
console.log(mySt.match(atozSmall)); // ["a", "b", "c", "d", "e", "f"]
console.log(mySt.match(NotAtozSmall)); // ["A", "B", "G", "1", "2", "3", "!", "2", "3", "4", "%", "^", "&", "*"]
console.log(mySt.match(atozCapital)); // ["A", "B", "G"]
console.log(mySt.match(NotAtozCapital)); // ["a", "b", "c", "d", "e", "f", "1", "2", "3", "!", "2", "3", "4", "%", "^", "&", "*"]
console.log(mySt.match(aAndcAnde)); // ["a", "c", "e"]
console.log(mySt.match(NotaAndcAnde)); // ["A", "B", "b", "d", "f", "G", "1", "2", "3", "!", "2", "3", "4", "%", "^", "&", "*"]
console.log(mySt.match(lettersCapsAndSmall)); // ["A", "a", "B", "b", "c", "d", "e", "f", "G"]
console.log(mySt.match(numsAndSpecials)); // ["1", "2", "3", "!", "2", "3", "4", "%", "^", "&", "*"]
console.log(mySt.match(specials)); // ["!", "%", "^", "&", "*"]

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot)); // Matches every character
console.log(email.match(word)); // Matches every word character
console.log(email.match(valid)); // ["O@g.com", "O@g.net"]

let name_s = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(name_s.match(re)); // ["1Spam", "2Spam", "3Spam", "Spam4", "Spam5"]

console.log(re.test(name_s)); // true
console.log(/(\bspam|spam\b)/gi.test("Osama")); // false
console.log(/(\bspam|spam\b)/gi.test("1Spam")); // true
console.log(/(\bspam|spam\b)/gi.test("Spam1")); // true

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe)); // ["osama@gmail.com", "elzero@gmail.net", "osama@mail.ru"]

let num_s = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let num_sRe = /0\d*0/gi;
console.log(num_s.match(num_sRe)); // ["0110", "05120", "0560"]

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe)); // ["https://google.com", "http://www.website.net", "web.com"]

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // ["S100S"]
console.log(serials.match(/s\d{4,5}s/gi)); // ["S3000S", "S50000S"]
console.log(serials.match(/s\d{4,}S/gi)); // ["S3000S", "S50000S", "S950000S"]
let my_String = "We Love Programming";
let nam_es = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// Test if the string ends with "ing"
console.log(/ing$/gi.test(my_String)); // true

// Test if the string starts with "We"
console.log(/^we/gi.test(my_String)); // true

// Test if the string ends with "Z"
console.log(/lz$/gi.test(nam_es)); // false

// Test if the string starts with a digit
console.log(/^\d/gi.test(nam_es)); // true

// Match digits followed by three word characters and ending with "Z"
console.log(nam_es.match(/\d\w{3}(?=z)/gi)); // ["1Osa", "2Ahm", "4Mou", "5Gam"]

// Match digits followed by eight word characters not ending with "Z"
console.log(nam_es.match(/\d\w{8}(?!z)/gi)); // ["3Mohammed"]

let txt = "We Love Programming And @ Because @ Is Amazing";

// Replace the first occurrence of "@" with "JavaScript"
console.log(txt.replace("@", "JavaScript")); // "We Love Programming And JavaScript Because @ Is Amazing"

// Replace all occurrences of "@" with "JavaScript"
console.log(txt.replaceAll("@", "JavaScript")); // "We Love Programming And JavaScript Because JavaScript Is Amazing"

// Using regular expression to replace "@" with "JavaScript"
let reg = /@/gi;
console.log(txt.replace(reg, "JavaScript")); // "We Love Programming And JavaScript Because JavaScript Is Amazing"
console.log(txt.replaceAll(/@/g, "JavaScript")); // "We Love Programming And JavaScript Because JavaScript Is Amazing"

// Form validation for phone number
document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
  let validatePhoneResult = phoneRe.test(phoneInput);
  if (validatePhoneResult === false) {
    return false;
  }
  return true;
};

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

// Regular expressions to match URLs
let rege1 = /\w+.\w+/gi;
let rege2 = /(http:\/\/)?\w+.\w+/gi;
let rege3 = /(https:\/\/)?\w+.\w+/gi;
let rege4 = /(https:\/\/)?(www.)?\w+.\w+/gi;
let rege5 = /(https:\/\/)?(www.)?\w+.\w+:\d{4}\/\w+.\w+\D+\d+\D+/gi;

console.log(url1.match(rege1)); // ["elzero.org"]
console.log(url2.match(rege2)); // ["http://elzero.org"]
console.log(url3.match(rege3)); // ["https://elzero.org"]
console.log(url4.match(rege4)); // ["https://www.elzero.org"]
console.log(url5.match(rege5)); // ["https://www.elzero.org:8080/articles.php?id=100&cat=topics"]

/*
function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary;
};
*/
class User {
  static count = 0; // Static property to keep track of the number of users
  #e; // Private property

  constructor(id, username, salary) {
    this.i = id;
    this.u = username || "Unknown"; // Default username to "Unknown" if not provided
    this.s = salary < 6000 ? salary + 1000 : salary; // Adjust salary if less than 6000
    this.#e = salary; // Assign salary to private property
    User.count++; // Increment user count
    this.msg = function () {
      return `Hello ${username} your salary is ${salary}`;
    };
    this.updateName = function (newName) {
      this.u = newName;
    };
  }

  // Method to calculate annual salary
  salaryPerYear = function () {
    return this.#e * 12;
  };

  // Method to write a message
  writeMsg = function () {
    return `Hello ${this.u} your salary is ${this.s}`;
  };

  // Static method to get the number of team members
  static memberInTeam = function () {
    return `team members are ${this.count}`;
  };
}

// Admin class extending User
class Admin extends User {
  constructor(id, username, salary, permissions) {
    super(id, username, salary);
    this.p = permissions;
  }
}

// Creating instances of User and Admin
let userOne = new User(100, "Abram", 25000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);
let adminOne = new Admin(1, "Mahrous", 500, "All");

console.log(User.memberInTeam()); // team members are 4

console.log(userOne.i); // 100
console.log(userOne.u); // Abram
console.log(userOne.s); // 25000
console.log(userOne.msg()); // Hello Abram your salary is 25000
console.log(userOne.writeMsg()); // Hello Abram your salary is 25000
console.log(userOne.salaryPerYear()); // 300000

userTwo.updateName("Emad");
console.log(userTwo.i); // 101
console.log(userTwo.u); // Emad
console.log(userTwo.s); // 6000
console.log(userTwo.msg); // [Function: msg]
console.log(userTwo.writeMsg); // [Function: writeMsg]

console.log(userThree.i); // 102
console.log(userThree.u); // Sayed
console.log(userThree.s); // 7000

console.log(adminOne.i); // 1
console.log(adminOne.u); // Mahrous
console.log(adminOne.s); // 1500
console.log(adminOne.p); // All
console.log(Admin.memberInTeam()); // team members are 4

console.log(userOne instanceof User); // true
console.log(userOne.constructor === User); // true

let str1 = "Abram";
let str2 = new String("Abram");
console.log(typeof str1); // string
console.log(typeof str2); // object
console.log(typeof str1 === typeof str2); // false
console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // true
console.log(str1.constructor === String); // true
console.log(str2.constructor === String); // true

// Adding a method to String prototype
String.prototype.filteringFromNumbers = function () {
  return this.split("")
    .filter((ele) => isNaN(parseInt(ele)))
    .join("");
};

let myNNickName = "Ar5t99522i882st A8441b877879r85a5m";
console.log(myNNickName.filteringFromNumbers()); // "Artist Abram"

// Defining properties on an object
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperties(myObject, {
  d: {
    writable: true,
    enumerable: true,
    configurable: true,
  },
  e: {
    writable: true,
    enumerable: false,
    configurable: true,
    value: 4,
  },
  f: {
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

myObject.c = 100;
myObject.f = 200;
console.log(delete myObject.f); // true

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
// Working with Date objects
let dateNow = new Date();
let birthday = new Date("Sep 16, 2000");
let dateDifference = dateNow - birthday;
console.log(dateDifference); // Difference in milliseconds
console.log(dateDifference / 1000 / 60 / 60 / 24 / 365); // Difference in years
console.log(dateNow);
console.log(dateNow.getTime()); // Timestamp in milliseconds
console.log(dateNow.getDate()); // Day of the month
console.log(dateNow.getFullYear()); // Year
console.log(dateNow.getMonth()); // Month (0-11)
console.log(dateNow.getDay()); // Day of the week (0-6)
console.log(dateNow.getHours()); // Hours
console.log(dateNow.getMinutes()); // Minutes
console.log(dateNow.getSeconds()); // Seconds

// Setting time and date
dateNow.setTime(0);
console.log(dateNow); // Epoch time

dateNow.setTime(1000);
console.log(dateNow); // 1 second after epoch

dateNow.setDate(49);
console.log(dateNow); // Adjusts the date

dateNow.setFullYear(2016, 25);
console.log(dateNow); // Adjusts the year and month

dateNow.setMonth(16);
console.log(dateNow); // Adjusts the month

console.log(Date.parse("Oct 25 1982")); // Parses the date string

// Creating Date objects with different constructors
let date1 = new Date(0);
console.log(date1); // Epoch time

let date2 = new Date(404344800000);
console.log(date2); // Date from timestamp

let date3 = new Date("10-25-1982");
console.log(date3); // Date from string

let date4 = new Date("1982-10-25");
console.log(date4); // Date from ISO string

let date5 = new Date("1982-10");
console.log(date5); // Date from year and month

let date6 = new Date("82");
console.log(date6); // Date from year

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7); // Date with specific time

let date8 = new Date(1982, 9, 25);
console.log(date8); // Date with year, month, and day

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9); // Date with ISO string and time

// Measuring time taken for a loop
let startLooping = new Date();
for (let i = 0; i < 1000; i++) {
  let div = document.createElement("div");
  let text = document.createTextNode(i);
  div.appendChild(text);
  document.body.appendChild(div);
}
let endLooping = new Date();
let diff = endLooping - startLooping;
console.log(diff); // Time difference in milliseconds

// Generator functions
function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
  let index = 0;
  // while (true) { yield index++; }
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNumbers();
  yield* generateLetters();
  yield* [4, 87, 5];
}

let generator = generateNumbers();
let generators = generateAll();

console.log(typeof generator); // "object"
console.log(generator);

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: undefined, done: true }

console.log(generators.next()); // { value: 1, done: false }
console.log(generators.next()); // { value: 2, done: false }
console.log(generators.next()); // { value: 3, done: false }
console.log(generators.next()); // { value: 4, done: false }
console.log(generators.next()); // { value: "A", done: false }
console.log(generators.next()); // { value: "B", done: false }
console.log(generator.return(7)); // { value: 7, done: true }
console.log(generators.next()); // { value: "C", done: false }
console.log(generators.next()); // { value: 4, done: false }
console.log(generators.next()); // { value: 87, done: false }

for (let value of generateNumbers()) {
  console.log(value); // 1, 2, 3, 4
}
for (let value of generator) {
  console.log(value); // No output as generator is already done
}

// export { myNNickName, myFriends, generators };
// Parsing and stringifying JSON
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer); // string
console.log(myJsonObjectFromServer); // {"Username": "Osama", "Age": 39}

const myOb = JSON.parse(myJsonObjectFromServer);
console.log(typeof myOb); // object
myOb.Username = "Abram";
myOb.Age = 21;

const myJsonObjectToServer = JSON.stringify(myOb);
console.log(typeof myJsonObjectToServer); // string
console.log(myJsonObjectToServer); // {"Username":"Abram","Age":21}

// Synchronous code execution
console.log("1");
console.log("2");
window.alert("Operation");
console.log("3");

// Asynchronous code execution with setTimeout
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

// Function call stack
function one() {
  console.log("one");
}
function two() {
  one();
  console.log("two");
}
function Three() {
  two();
  console.log("three");
}
Three(); // one, two, three

// Event loop and setTimeout
console.log("FIRST");
setTimeout(() => {
  console.log("THIRD");
}, 0);
console.log("SECOND");
setTimeout(() => {
  console.log("FOURTH");
}, 0);

// XMLHttpRequest to fetch data from GitHub API
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(this.responseText);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

// Callback function example
function iamaCallback() {
  console.log("I'am a callback");
}
setTimeout(iamaCallback, 4000);

// Nested setTimeout for sequential asynchronous operations
setTimeout(() => {
  console.log("Download image");
  setTimeout(() => {
    console.log("Resize Image");
    setTimeout(() => {
      console.log("Make the image as a logo");
      setTimeout(() => {
        console.log("Show the logo");
      }, 0);
    }, 0);
  }, 0);
}, 0);

// Promise example
const myPromise = new Promise((resolve, reject) => {
  let contacts = true;
  if (contacts) {
    resolve("Connectation Done");
  } else {
    reject(Error("Connecation Failed"));
  }
});

console.log(myPromise);

myPromise.then(
  (resolver) => console.log(`Good ${resolver}`),
  (rejected) => console.log(`Bad ${rejected}`)
);

// Chaining promises
const myPromises = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Abram", "Emad", "Mahrous", "Sehata"];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromises
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(() => console.log("The Operation Is Done"));
// Function to fetch data using XMLHttpRequest and return a promise
const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("no data available"));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

// Using the getData function to fetch data and handle the promise
getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length === 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(() => console.log("The Operation Is Done"));

// Fetch API example
fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((res) => res.json())
  .then((result) => console.log(result[0].name))
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(() => console.log("The Operation Is Done"));

// Function returning a promise to check for users
function getDat() {
  return new Promise((res, rej) => {
    let users = [];
    if (users.length > 0) {
      res("Users Found");
    } else {
      rej("No Users Found");
    }
  });
}

getDat().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

// Function returning a promise to check for users (with typo fixed)
function getDa() {
  let users = [];
  if (users.length > 0) {
    return Promise.resolve("Users Found");
  } else {
    return Promise.reject("No Users Found");
  }
}

getDa().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

// Async function to check for users
async function getD() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getD());
getD().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

// Promise examples with different timeouts
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("My First Promise");
  }, 5000);
});
const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("My Second Promise");
  }, 1000);
});
const myLastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("My Last Promise");
  }, 3000);
});

// Using Promise.all, Promise.allSettled, and Promise.race
Promise.all([myFirstPromise, mySecondPromise, myLastPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
Promise.allSettled([myFirstPromise, mySecondPromise, myLastPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
Promise.race([myFirstPromise, mySecondPromise, myLastPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

// Async function with a rejected promise
const mySendingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I'am the Good Promise");
  }, 1000);
});

async function gettingData() {
  console.log("Before Promise");
  console.log(await mySendingPromise.catch((error) => console.log(error)));
  console.log("After Promise");
}

gettingData();

// Async function to fetch data using fetch API
async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch(
      "https://api.github.com/users/elzerowebschool/repos"
    );
    console.log(await myData.json());
  } catch (Reason) {
    console.log(`Reason: ${Reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();
