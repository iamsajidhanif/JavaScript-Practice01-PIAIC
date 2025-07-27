// ===================================================================================
//                          JavaScript Practice 01 - PIAIC
// ===================================================================================


// DISPLAYING OUTPUT:
// Alert:
alert("Hello World");


// Console.log:
console.log("Hello World");
console.log(2+8);


// document.write:
document.write("Hello Word");
document.write(2+8);


// VARIABLES:
// Declaration and Initialization:
var age = 25;
var age;    // -- Declaration
age = 25;   // -- Initialization / Assignment


// DATA TYPES:
// Undefined Data Type:
var name = "sajid";
name = undefined
console.log(name); // undefined


// Null Data Type:
var name = "Mark";
name = null;
console.log(name); // null


// JavaScript Data Types are Dynamic:
var name = "Mark"; // It’s String
name = 25; // Now changed to Number
name = true; // Now changed to Boolean
console.log(name); // Returns "boolean"


// typeof Operator:
var a = "Hello"; // Returns "string"
var b = 45;
var c = true;
var d = undefined;
var e = null;
console.log(typeof a); // Returns "string"
console.log(typeof b); // Returns "number"
console.log(typeof c); // Returns "boolean"
console.log(typeof d); // Returns "undefined"
console.log(typeof e); // Returns "object"


// STATEMENT AND EXPRESSION:
// End of Statement with semicolon (;):
i = 3; j = 5; k = i + j;
alert(i); console.log(k);


// End of Statement without semicolon (;):
var a = 5 // New line will end statement, but it is not recommended while coding
a * 4
alert(a)
console.log(a)


// VARIABLE NAMES:
// Legal Variable Names:
var hello = 56;
var _xyz = 44;
var $work = 90;
var user2 = 56;
var i_info = 99;
var my$work = 77;


// Illegal Variable Names:
var 2user = 12; // Can't start with number
var my user = 23; // Can't contains space
var hello#world = 34; // Can't contains special characters other than underscore (_) or dollar sign ($)
var my-info = 44; // Same comment as mentioned above
var my?info = 45; // Same comment as mentioned above
var my*info = 45; // Same comment as mentioned above


// Variable names are case sensitive:
var rose = "This is rose";
var Rose = "This is Rose";
alert(rose);
alert(Rose);
alert(ROSE); // Error: ROSE is not defined


// OPERATORS:
// Arithmetic Operators:
var a = 5;
var b = 3;
var c = a + b; // Addition, result 8
var d = a - b; // Subtraction, result 2
var e = a * b; // Multiplication, result 15
var f = a / b; // Division, result 1.666
var g = a % b; // Modulus (Remainder), result 2
var h = a ** b; // Exponentiation, result 125
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);


// Assignment Operators:
var a = 5; // equals = is assignment operator
console.log(a);
a = a + 2; // Assign 7 in variable a
console.log(a);
// OR
var b = 5;
console.log(b);
b += 2; // Assign 7 in variable b, (b = b + 2) and (b += 2) both are same
console.log(b);


// BODMAS Rule:
var x = 5 + 2 * 3 - 2 / 2; // result 10
var y = 5 + 2 * (3 - 2) / 2; // result 6
console.log(x);
console.log(y);
var a = 3 + 5 * 2; // result 13
var b = 8 / 2 - 1; // result 3
var c = 3 % 2 + 4 - 1; // result 4
var d = a + 5 * c - b / (3 + b);// result 32.5
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// Increment and Decrement Operator:
var a = 12;
a = a + 1; // 13
a = a - 1; // 12
console.log(a);

var b = 12;
b += 1; // 13
b -= 1; // 12
console.log(b);


// Prefix Increment and Decrement:
var age = 12;
++age;
alert(age); //Result 13
--age;
alert(age); //Result 12


// Postfix Increment and Decrement:
var age = 12;
age++;
alert(age); //Result 13
age--;
alert(age); //Result 12


// Prefix Increment:
var age = 12;
var newAge = ++age;
alert(age); //Result 13
alert(newAge); //Result 13


// Postfix Increment:
var age = 12;
var newAge = age++;
alert(age); //Result 13
alert(newAge); //Result 12, see the difference


// Prefix Decrement:
var age = 12;
var newAge = --age;
alert(age); //Result 11
alert(newAge); //Result 11


// Postfix Decrement:
var age = 12;
var newAge = age--;
alert(age); //Result 11
alert(newAge); //Result 12, see the difference


// Example 1:
var a = 4;
var b = 2;
var c = a++ - b; // first value of a placed here which is 4 then increase 1 in a so will become 5
alert(a); // 5
alert(b); // 2
alert(c); // 2


// Example 2:
var a = 4;
var b = 2;
var c = ++a + b; // first value of a increased so will become 5 then value of a will be placed here, 5
alert(a); // 5
alert(b); // 2
alert(c); // 7


// Example 3:
var a = 4;
var b = 3;
var c = a++ + --b - --a;
alert(a); // 4
alert(b); // 2
alert(c); // 2


// Example 4:
var a = 4;
var b = 3;
var c = ++a + b++ - a + --b;
alert(a); // 5
alert(b); // 3
alert(c); // 6


// STRING CONCATENATION:
// Concatenating Text Strings:
var firstName = "Sajid";
var lastName = "Hanif";
//concatenate firstName, space character and lastName
var fullName = firstName + " " + lastName;
alert(fullName);


// Concatenating Strings and Numbers:
var a = "6" + 2; // "62"
var b = 3 + "6"; // "36"
var c = "Hello " + 2; // "Hello 2"
var d = 2 + " Hello"; // "2 Hello "
var e = "Hello "+ 3 + 4; // "Hello 34"
var f = 3 + 4 + " Hello"; // "7 Hello"
var g = "Hello " + (3 + 4); // "Hello 7"
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);


// PROMPT AND PARSING STRING:
// prompt or window.prompt():
var question = "What is your name?";
var defaultAnswer = "Hamza";
var name = prompt(question, defaultAnswer);
console.log("Name = "+ name);


// prompt or window.prompt():
var question = "What is your age?";
var age = prompt(question);// Assuming input 12
var newAge = age + 5; // It will concatenate
console.log("New Age = " + newAge); //result 125, because prompt returns "string" by default


// Convert string to integer:
var value1 = "3";
var value2 = "5";
var value3 = value1 + value2;
console.log(value3);// result 35, both values are strings therefore, it won't add the values


// Getting Number input from user in prompt:
var age = prompt("What is your age"); // assuming we will provide value 5 in input
var num = 4;
var sum = age + num;
console.log(sum); // result 54, because we already know that prompt returns "string" by default


// Convert String to Integer thru parseInt():
var age = prompt("What is your age"); // assuming we will provide value 5 in input
var num = 4;
var sum = parseInt(age) + num;
console.log(sum); // result 9, but it won't get value in decimal


// If value is not number in a string, then it will return NaN:
var age = prompt("What is your age"); // input abc
var num = 4;
var sum = parseInt(age) + num;
console.log(sum); // result, NaN


//Convert String to Decimal thru parsFloat():
var question = "What is your age?"; // assuming we will provide decimal value 5.5 in input
var age = prompt(question);
var yourAge = parseFloat(age) + 4;
console.log("Your Age = " + yourAge);


//Convert String (decimal/ non decimal) to Number with Number() Function:
var age = prompt("How old are you?");
var num = 1;
var sum = num + Number(age);
console.log(sum);


//Convert String (decimal/ non decimal) to Number with + Sign:
var age = +prompt("How old are you?"); // with + sign, it takes the input as number (decimal/ non decimal)
var num = 1;
var sum = num + age;
console.log(sum);


// Convert different strings to Number thru Number() Function:
var a = Number(true); // returns 1
var b = Number(false); // returns 0
var c = Number("999"); // returns 999
var d = Number("999 888"); // returns NaN
var e = Number("Hello"); // returns NaN
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


// Comparision Operators:
var a = 3;
console.log(a == "6");   // false
console.log(a === "6");  // false
console.log(a != 6);    // true
console.log(a !== 6);   // true
console.log(a > 6);     // false
console.log(a < 6);     // true
console.log(a >= 6);    // false
console.log(a <= 6);    // true

var a = 3;
console.log(a == 3); //return true
console.log(a == "3"); //return true
console.log(a == 6); //return false
console.log(a === 3); //return true
console.log(a === "3"); //return false
console.log(a === 6); //return false


// LOGICAL OPERATORS:
// && Logical Operator:
var a = 60;
var b = a > 50 && a < 70;
alert(b); // return true


var c = 80;
var d = c > 50 && c < 70;
alert(d); // return false


// || Logical Operator:
var a = 60;
var b = a < 50 || a > 70;
alert(b); // return false


var c = 80;
var d = c < 50 || c > 70;
alert(d); // return true


// ! Logical NOT:
alert(!true); // false
alert(!false); // true


var a = 60;
var b = !(a < 50);
alert(b); // return true


var c = 80;
var d = !(c > 50);
alert(d); // return false


var a = 60;
var b = a > 100; // fase
var c = !b; // true
var d = !(a > 100); // true
console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
console.log("d = "+d);


alert(!1); // false
alert(!0); // true


// !! Logical NOT:
alert(!!1); // true
alert(!!0); // false


var a = 6;
var b = !a;
var c = !!a;
console.log("a = " + a); // 6
console.log("a = " + b); // false
console.log("a = " + c); // true


var a = 0;
var b = !a;
var c = !!a;
console.log("a = " + a); // 0
console.log("a = " + b); // true
console.log("a = " + c); // false


var a = -5;
var b = !a;
var c = !!a;
console.log("a = " + a); // -5
console.log("a = " + b); // false
console.log("a = " + c); // true


// Why they are called short-circuit:
var score = 40;
var newScore = score > 50 && score < 70 && score == 66; // terminates on 1st condition
console.log(newScore); // returns false


var score = 71;
var newScore = score > 50 && score < 70 && score == 66; // terminates on 2nd condition
console.log(newScore); // returns false


var score = 61;
var newScore = score > 50 && score < 70 && score == 66; // terminates on 3rd condition
console.log(newScore); // returns false


// CONDITIONS:
// if Condition:
var age = 12;
if( age > 9 ) {
    console.log("Age = "+age);
}


// else Condition:
var age = 15;
if( age > 18 ) {
    console.log("Qualifies for driving");
} else {
    console.log("Does not qualify for driving");
}


// else if Condition:
var score = 80;
if (score > 80) {
    console.log("Grade A");
} else if (score > 70) {
    console.log("Grade B");
} else if (score > 60) {
    console.log("Grade C");
} else {
    console.log("Failed");
}


// Grading Program:
var obtNmbr = prompt("Enter your Obtained Numbers:");
var obtNmbr = Number(obtNmbr);
if (obtNmbr >= 80) {
    alert("You have passed with Grade 'A+1'");
}
else if (obtNmbr >= 70) {
    alert("You have passed with Grade 'A'");
}
else if (obtNmbr >= 60) {
    alert("You have passed with Grade 'B'");
}
else if (obtNmbr >= 50) {
    alert("You have passed with Grade 'C'");
}
else if (obtNmbr >= 40) {
    alert("You have passed with Grade 'D'");
}
else {
    alert("You have failed!");
}


// nested if Condition:
var score = 92;
if (score > 80) {
    console.log("Grade A");
    if (score > 90) {
        console.log("Reward $100")
    }
    else {
        console.log("Reward $50")
    }
}
else {
    console.log("Failed");
}


// Set of Conditions (&&):
var score = 70;
if (score > 80 && score <= 100) {
    console.log("Grade A");
}
else if (score > 70 && score <= 80) {
    console.log("Grade B");
}
else if (score > 60 && score <= 70) {
    console.log("Grade C");
}


// Set of Conditions (||):
var input = prompt("Enter any character");
if (input.toLowerCase() == "a" || input.toLowerCase() == "e" || input.toLowerCase() == "i" | input.toLowerCase() == "o" || input.toLowerCase() == "u") {
    console.log("It's a Vowel");
}
else {
    console.log("It's a consonants");
}


// VALUE CONVERSION TO BOOLEAN:
// ----------------------------
// The following values will be converted to false:
//  a. 0 // Zero
//  b. “” or ‘’ or `` // Empty String single or double quotes
//  c. undefined
//  d. null
//  e. NaN

// 2. All else will be converted to true:
//  a. 1 // Any number (positve or negative) other than zero
//  b. “AnyText” // String with any text
//  c. [] // Array
//  d. {} // Object

// Number to Boolean:
var age = 45;
// 45 will be converted to true, so if will be executed
if (age) {
    console.log("In If Age = " + age);
}
else {
    console.log("In else Age = " + age);
}


null to Boolean:
var value = null;
// null, undefined, NaN, 0, empty string ("") will be converted to false, so else will be executed
// any number (positive or negative) other than 0, string with any text/space, object{} will be converted to true
if (value) {
    console.log("In If name = "+value);
}
else {
    console.log("In else name = "+value);
}


// String to Boolean:
var name = "Hamza";
// Hamza will be converted to true, so if will be executed
if (name) {
    console.log("In If name = " + name);
}
else {
    console.log("In else name = " + name);
}


// Empty String to Boolean:
var name = "";
// it will be converted to false, so else will be executed
if (name) {
    console.log("In If name = " + name);
}
else {
    console.log("In else name = " + name);
}


// Undefined to Boolean:
var name; // Default value is undefined
//it will be converted to false, so else will be executed
if (name) {
    console.log("In If name = " + name);
}
else {
    console.log("In else name = " + name);
}


VALUE CONVERSION TO BOOLEAN WITH LOGICAL OPERATORS:
// 1. Value conversion to boolean with logical operator (&&):
var a = 6;
var b = 8;
var c = a && b;
console.log(c); // && returns last value (8), if all values are true

// 2. Value conversion to boolean with logical operator (&&):
var a = 0;
var b = 8;
var c = a && b;
console.log(c); // && returns the false value (0), where found and stopped checking


// 1. Value conversion to boolean with logical operator (||):
var a = 6;
var b = 8;
var c = a || b;
console.log(c); //|| returns the true value (6), where found and stopped checking


// 2. Value conversion to boolean with logical operator (||):
var a = 0;
var b = 8;
var c = 9
var d = a || b || c;
console.log(d); // || returns the true value (8), where found and stopped checking


// 3. Value conversion to boolean with logical operator (||):
var a = null;
var b = undefined;
var c = 0;
var d = NaN;
var e = a || b || c || d;
console.log(d); // || returns last value (NaN), if all values are false

// // FOR LOOP:
// // for Loop:
for (var i = 0; i < 5; i++){
    console.log(i);
}


for (var i = 5; i <= 8; i++){
    console.log(i);
}


for (var i = 10; i > 0; i--){
    console.log(i);
}


// Table of 3:
var num = 3;
for (var i = 1; i <= 10; i++){
    var c = 3 * i;
    console.log(num+" x "+i+" = " + c);
}


let num = prompt("Enter table number");
for (let i = 1; i <=10; i++){
    console.log(`${num} x ${i} = ${num*i}` );
}


// Table Printing Program with User Input:
var num = +(prompt("Please enter any number:"));
for (var i = 1; i <= 10; i++){
    console.log(num+" x "+i+" = " + (num*i));
}


// Break: It breaks further iterations in for loop
for (var i = 0; i < 8; i++){
    if (i == 4) {
        break;
    }
    console.log("I = " + i);
}


// Continue: It prevents a specific iteration in for loop
for (var i = 0; i < 8; i++){
    if (i == 4) {
        continue;
    }
    console.log("I = " + i);
}


// Nested Loops:
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log("I = " + i + " J = " + j);
    }
}


// TASK:
// 1. Find out if number is prime number or not,
// prime number is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
// Prime Number Program: (Method-1 by mine)
var num = parseInt(prompt("Enter Number:"));
for (var i = 2; i < num; i++) {
    result = num % i;
    if (result == 0) {
        console.log("Not a Prime Number!");
        break;
    }
    else if (result == 1) {
        console.log("Prime Number!");
        break
        
    }
}



// Prime Number Program: (Method-2 by ZH)
var num = parseInt(prompt("Please enter number"));
var isPrime = true;
for (var i = 2; i < num; i++) {
    var result = num % i;
    if (result == 0) {
        console.log("Number is not Prime = " + num + " I " + i);
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Number is Prime " + num);
}


// Lecture #94, Slide #153: Generate triangle output like below (Hint: nested loop required)



// ARRAY:
// Creating an Array (Metod #1):
var foods = ["Biryani", "Pulao", "Daal", "Karrhi"];
console.log(foods);


// Creating an Array (Metod #2):
var foods = new Array ("Biryani", "Pulao", "Daal", "Karrhi", "Chinees");
console.log(foods);


// Creating different types of Arrays:
var arr1 = ["Hello", "World", "Bye"];
var arr2 = [29, 38, 16, 22];
var arr3 = [true, false, true, false, false];
var arr4 = [23.2, 45.8, 98.12];
var arr5 = [{ name1: "John" }, { name2: "Jason" }];
var arr6 = [74, "Hello", true, { name: "John" }];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);


// Accessing Array Elements:
var foods = ["Pizza", "Burger", "Snacks"];
var a = foods[0]; // Pizza
var b = foods[1]; // Burger
var c = foods[2]; // Snacks
alert(a); // Pizza
alert(foods[2]); // Snacks


// Accessing full Array:
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods); // Pizza, Burger, Snacks


// Accessing Index that does not exists:
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods[0]); // Pizza
console.log(foods[1]); // Burger
console.log(foods[2]); // Snacks
console.log(foods[5]); // undefined


// Add Element(s) using index:
var foods = [];
foods[0] = "Pizza";
foods[1] = "Burger";
foods[2] = "Snacks";
console.log(foods[0]); // Pizza
console.log(foods[2]); // Snacks


// Add/Update Element(s) using index:
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods[1]); // Burger
foods[1] = "Sandwich"; // Updating existing element
console.log(foods[1]); // Sandwich
foods[3] = "French Fries"; // Adding 1 more element
console.log(foods[3]); // French Fries


// Length Property:
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods.length); // 3
var arr = [];
console.log(arr.length); // 0


// Push function:
var soaps = [];
soaps.push("Lux");
soaps.push("Life Boy");
soaps.push("Detol");
soaps.push("Dove");
console.log(soaps[0]);
console.log(soaps[1]);
console.log(soaps[2]);
console.log(soaps[3]);


// Push function - Multiple inputs:
var familyNames = [];
familyNames.push("Muhammad Hanif")
familyNames.push(" Muhammad Sajid", " Muhammad Asif", " Muhammad Arif", " Huzaifa Sajid", " Hamza Sajid");
alert(familyNames);
console.log(familyNames);
console.log(familyNames.length);


// Push function - User inputs:
var courses = [];
courses.push(prompt("Enter Course #1"));
courses.push(prompt("Enter Course #2"));
courses.push(prompt("Enter Course #3"));
courses.push(prompt("Enter Course #4"));
courses.push(prompt("Enter Course #5"));
console.log(courses);
console.log(courses.length);


// ARRAY DATA STRUCTURE:
// 1. Random Access: You can access array elements from any index and update them.
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods[1]); // Burger
foods[1] = "Sandwich"; // Updating existing element
console.log(foods[1]); // Sandwich


// 2. Stack or LIFO (Last In First Out):
// Stack (Example #1) - push & pop functions:
var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log("Length " + foods.length); // length 3
console.log(foods);
console.log(foods.pop()); // removes last value (Snacks) from array and retuens this value (Snacks)
console.log(foods.pop()); // removes last value (Burger) from array and retuens this value (Burger)
console.log("Length " + foods.length); // length 1



// Stack (Example #2) - pop function:
var items = [];
items.push("Fan");
items.push("Chair");
items.push("Table");
items.push("Computer");
items.push("Laptop");
items.push("Calendar");
console.log(items.length); // length 6
console.log(items); // ['Fan', 'Chair', 'Table', 'Computer', 'Laptop', 'Calendar']

var item1 = items.pop();
console.log(items.length); // length 5
console.log(items); // ['Fan', 'Chair', 'Table', 'Computer', 'Laptop']
console.log(item1); // Calendar

var item2 = items.pop();
console.log(items.length); // length 4
console.log(items); // ['Fan', 'Chair', 'Table', 'Computer']
console.log(item2); // Laptop

var item3 = items.pop();
console.log(items.length); // length 3
console.log(items); // ['Fan', 'Chair', 'Table']
console.log(item3); // Computer



// 3. Queue or FIFO (First In First Out):
// Queue (Example #1):
// Shift function:
var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log("Length " + foods.length); // Length 3
console.log(foods);
console.log(foods.shift()); // Remove Pizza from array and returns this value
console.log(foods.shift()); // Remove Burger from array and returns this value
console.log("Length " + foods.length); // Length 1


// Queue (Example #2)
// Shift function:
var items = [];
items.push("Fan");
items.push("Chair");
items.push("Table");
items.push("Computer");
items.push("Laptop");
items.push("Calendar");
console.log(items.length);
console.log(items);

var item1 = items.shift();
console.log(items.length);
console.log(items);
console.log(item1);

var item2 = items.shift();
console.log(items.length);
console.log(items);
console.log(item2);

var item3 = items.shift();
console.log(items.length);
console.log(items);
console.log(item3);


// Unshift Function:
var foods = [];
foods.push("Pizza");
foods.push("Burger");
foods.push("Snacks");
console.log(foods); // "Pizza" "Burger" "Snacks"
console.log("Length " + foods.length); // Length 3
console.log(foods[0]); // "Pizza"

foods.unshift("Sandwich");
console.log(foods); // "Sandwich" "Pizza" "Burger" "Snacks"
console.log("Length " + foods.length); // Length 4
console.log(foods[0]); // "Sandwich"



// Iterating array with Loops (showing array values in the list):
var foods = ["Pizza", "Burger", "Snacks"];
for (var i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}


// Task:
// 1. Create an array and fill it with numbers
// 2. Ask input from user
// 3. Find element in array that is provided by user

// Task Solution #1 by mine:
var numArry = [2, 4, 5, 7];
var usrInp = prompt("Enter Number:");
for (var i = 0; i < numArry.length; i++) {
    if (usrInp == numArry[i]) {
        console.log("Number "+usrInp+" is available");
    } 
}



// Task Solution #2 by ZH:
var numArry = [2, 4, 5, 7];
var usrInp = parseInt(prompt("Enter Number:"));
var found = false;
console.log("User Input " + usrInp);
for (var i = 0; i < numArry.length; i++) {
    if (usrInp === numArry[i]) {
        console.log("Found " + usrInp + " on index = " + i);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Not found");
}


// Updating Arry with Loops:
var arry1 = [2, 4, 5, 7, 9];
for (var i = 0; i < arry1.length; i++){
    arry1[i] = arry1[i] * 3;
}
for (var j = 0; j < arry1.length; j++){
    console.log(arry1[j]);
}


// Splice function (Example #1):
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods); // "Pizza","Burger","Snacks"
foods.splice(1, 0, "Sandwich");
console.log(foods); // "Pizza","Sandwich", "Burger","Snacks"


// Splice function (Example #2):
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods); // "Pizza","Burger","Snacks"
foods.splice(1, 0, "Sandwich", "Fries");
console.log(foods); // "Pizza","Sandwich", "Fries", "Burger","Snacks"


// Splice function (Example #3):
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods); // "Pizza","Burger","Snacks"
foods.splice(1, 2, "Sandwich");
console.log(foods); // "Pizza","Sandwich"


// Splice function returns removed values:
var foods = ["Pizza", "Burger", "Snacks"];
console.log(foods); // "Pizza","Burger","Snacks"
var returnFood = foods.splice(1, 2, "Sandwich");
console.log(foods); // "Pizza","Sandwich"
console.log(returnFood); // "Burger","Snacks"


// Slice function (Example #1):
var foods = ["Pizza", "Burger", "Snacks", "Sandwich", "Fries"];
console.log(foods); // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"
var arr = foods.slice(1, 3);
console.log(arr); // "Burger","Snacks"


// Slice function (Example #2):
var foods = ["Pizza", "Burger", "Snacks", "Sandwich", "Fries"];
console.log(foods); // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"
var arr = foods.slice(2); // returns values from given index number to the last index number
console.log(arr); // "Snacks", "Sandwich","Fries"


// Other Array functions:
1. filter()
2. find()
3. indexOf()
4. lastIndexOf()
5. map()
6. reverse()
7. sort()
and others


// Comparing Two Empty Arrays:
// Example #1:
var arry1 = [];
var arry2 = [];
var c = (arry1 == arry2); // false
var d = (arry1 === arry2); // false
console.log(c);
console.log(d);

// Example #2:
var a = [];
var b = a;
var c = (a == b); // true
var d = (a === b); // true
console.log(c);
console.log(d);


// STRINGS: JavaScript strings are used for storing and manipulating text.
// String Length Property:
var msg = "Hello World";
console.log(msg.length); // 11


// Escape Characters:
var a = "Hello \'World\'"; // Single quote
var b = "Hello \"World\""; // Double quote
var c = "Hello\\World"; // Backslash
var d = "Hello\nWorld"; // New Line
var e = "Hello\tWorld"; // Horizontal Tab
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


// STRING FUNCTIONS:
// toLowerCase() function:
var food = "sANdWiCh";
var updatedFood = food.toLowerCase();
console.log(food); // sANDWiCh
console.log(updatedFood); // sandwich


// toUperCase() function:
var food = "sANdWiCh";
var updatedFood = food.toUpperCase();
console.log(food); // sANDWiCh
console.log(updatedFood); // SANDWICH


// toLowerCase or toUpperCase (User Input Example #1):
var food = "Pizza";
var input = "PIZZA";
console.log(food);
console.log(input);
if (food.toLowerCase === input.toLowerCase) {
    console.log("Matched");
}
else{
    console.log("Not Matched");
}
console.log(food.toLowerCase());
console.log(input.toLowerCase());


// toLowerCase or toUpperCase (User Input Example #2):
var usrInput = prompt("Enter your name");
console.log("User's Input is "+usrInput);
console.log(usrInput.toLowerCase());
console.log(usrInput.toUpperCase());


// slice() function (Example #1):
var a = "Hello World"; // 6 to (9-1)
var b = a.slice(6, 9); //returns Wor
console.log(a);
console.log(b);


// slice() function (Example #2):
var a = "Hello World"; // 6 to end
var b = a.slice(6); //returns World
console.log(a);
console.log(b);


// slice() function (Example #3):
var a = "Hello World"; // -5 to -2
var b = a.slice(-5, -2); //returns Wor
console.log(a);
console.log(b);


// indexOf() function (Example #1):
var a = "To be or not to be";
var b = a.indexOf("be"); // returns 3
console.log(a);
console.log(b);


// indexOf() function (Example #2):
var a = "To be or not to be";
var b = a.indexOf("be", 10); //returns 16
console.log(a);
console.log(b);


// indexOf() function (Example #3):
var a = "To be or not to be";
var b = a.indexOf("can"); //returns -1
console.log(a);
console.log(b);


// lastIndexOf() function (Example #1):
var a = "To be or not to be";
var b = a.lastIndexOf("be"); //returns 16
console.log(a);
console.log(b);


// lastIndexOf() function (Example #2):
var a = "To be or not to be";
var b = a.lastIndexOf("be", 10); //returns 3
console.log(a);
console.log(b);


// lastIndexOf() function (Example #3):
var a = "To be or not to be";
var b = a.lastIndexOf("can"); //returns -1
console.log(a);
console.log(b);


// charAt() function: It takes single index input and returns character at that index
var a = "To be or not to be";
var b = a.charAt(7);
console.log(a);
console.log(b);


// replace() function (replace once):
var str = "To be or not to be";
var b = str.replace("be", "hello"); // To hello or not to be
console.log(str);
console.log(b);


// replace() function (replace globally):
var str = "To be or not to be";
var b = str.replace(/be/g,"hello"); // To hello or not to hello
console.log(str);
console.log(b);


// replace() function (replace case insensitive):
var str = "To be or not to be";
var b = str.replace(/to/i, "2"); // 2 be or not to be
console.log(str);
console.log(b);


// replace() function (replace globally and case insensitive):
var str = "To be or not to be";
var b = str.replace(/to/gi, "2"); // 2 be or not 2 be
console.log(str);
console.log(b);


// split() function (Example #1):
var str = "To be or not to be";
var b = str.split(" "); // split with space - returns array: ["To", "be", "or", "not", "to", "be"]
console.log(str);
console.log(b);


// split() function (Example #2):
var str = "To, be or|not to,be";
var a = str.split(" "); // split with space - returns array: ['To,', 'be', 'or|not', 'to,be'] with length (4)
var b = str.split(","); // split with commas - returns array: ['To', ' be or|not to', 'be'] with length (3)
var c = str.split("|"); // split with pipe - returns array: ['To, be or', 'not to,be'] with length (2)
console.log(str);
console.log(a);
console.log(b);
console.log(c);


// MATH: Math class provides many functions that allows you to perform mathematical tasks on numbers.
// Math.round() function (Example #1):
var average = (15 + 23 + 39) / 3; // 25.6666
var roundedAverage = Math.round(average); // 26
console.log(roundedAverage);


// Math.round() function (Example #2):
var a = Math.round(4.7); // 5
var b = Math.round(4.1); // 4
var c = Math.round(4.5); // 5 (positve value)
var d = Math.round(-4.1); // -4
var e = Math.round(-4.7); // -5
var f = Math.round(-4.5); // -4 (negative value)
var g = Math.round(5); // 5
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);


// Math.ceil() function: Math.ceil(x) returns the value of x rounded "up" to its nearest integer.
var a = Math.ceil(4.7); // 5
var b = Math.ceil(4.1); // 5
var c = Math.ceil(-4.1); // -4
var d = Math.ceil(-4.7); // -4
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// Math.floor() function: Math.floor(x) returns the value of x rounded "down" to its nearest integer.
var a = Math.floor(4.7); // 4
var b = Math.floor(4.1); // 4
var c = Math.floor(-4.1); // -5
var d = Math.floor(-4.7); // -5
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// Math.random() function (Example #1):
var num = Math.random(); // result will be like 0.5251908043871081
console.log(num);


// Math.random() function (Example #2):
var num = Math.random();
console.log("Num = "+num);
var num1 = num * 6;
console.log("Num1 = "+num1);
var num2 = num1 + 1;
console.log("Num2 = "+num2);
var num3 = Math.floor(num2);
console.log("Num3 = "+num3);


// Generate random number between some range:
var num = Math.random();
var num2 = (num * 6) + 1;
var dice = Math.floor(num2); // 1 to 6
console.log(num);
console.log(num2);
console.log(dice);


// Controlling the length of decimals: toFixed() function
var avg = (15 + 23 + 39) / 3; // 25.66666666666666
var avg1 = avg.toFixed(2);// returns 25.667
console.log(avg);
console.log(avg1);


// DATE OBJECT:
// Creating Date Objects: There are 4 ways to create a new date object.
var date1 = new Date()                              // Sun Feb 26 2023 18:15:41 GMT+0500
var date2 = new Date(2019, 7, 11, 10, 25, 40, 300); // Sun Aug 11 2019 10:25:40 GMT+0500 (date isn't correct)
var date3 = new Date(1565501140300);                // Sun Aug 11 2019 10:25:40 GMT+0500 (Slide #137)
var date4 = new Date("2019/9/8 10:15:15");          // Sun Sep 08 2019 10:15:15 GMT+0500
var date5 = new Date("2019/9/8 10:15:15");          // Sun Sep 08 2019 10:15:15 GMT+0500
var date6 = new Date("January 12 2019 10:15:15");   // Sat Jan 12 2019 10:15:15 GMT+0500
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
var date1 = new Date();
var date2 = new Date("8 19 1978")
var date3 = new Date("1978 8 19")
var date4 = new Date("1978/8/19 10:15:40")
var date5 = new Date("10:15:40 1978/8/19")
var date6 = new Date("Aug 19 1978 20:30:45")
var date7 = new Date("20:30:45 Aug 19 1978")
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
console.log(date7);


// Unix time (Current time in milliseconds):
// JavaScript, understands the date based on a timestamp derived from Unix time,
// which is a value consisting of the number of milliseconds that have passed since midnight on
// January 1st, 1970. We can get the timestamp with the getTime() method.
var date = new Date();
console.log(date);
var unixtime = date.getTime();
console.log("Unix Time (Current time in ms): "+unixtime); // Unix Time (Current time in ms): 1677439372697

// Epoch time (01 January, 1970 00: 00: 00):
// Epoch time, also referred to as zero time, is represented by the date string
// 01 January, 1970 00: 00: 00 Universal Time (UTC), and by the 0 timestamp.
var epochtime = new Date(0);
console.log("Epoch Time: "+epochtime);// Epoch Time: Thu Jan 01 1970 05:00:00 GMT+0500 (Pakistan Standard Time)

// Retrieving the Date Components:
var date = new Date("Aug 19 1978 20:00:00");
console.log("Date of Birth:",date);// Date of Birth: Sat Aug 19 1978 20:00:00 GMT+0500 (Pakistan Standard Time)
console.log(date.getFullYear(date));
console.log(date.getMonth(date));
console.log(date.getDate(date));
console.log(date.getDay(date));
console.log(date.getHours(date));
console.log(date.getMinutes(date));
console.log(date.getSeconds(date));
console.log(date.getMilliseconds(date));
console.log("Unix Time (Current time in milliseconds):",date.getTime(date));


// Modifying the Date:
var date = new Date("June 14 2019 10:45:25");
console.log(date); // Fri Jun 14 2019 10:45:25 GMT+0500 (Pakistan Standard Time)
date.setFullYear(2017);
console.log(date); // Wed Jun 14 2017 10:45:25 GMT+0500 (Pakistan Standard Time)


// Converting Day of Week to Text:
var daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date("June 14 2019 10:45:25");
console.log(date);
var day = (date.getDay());
console.log(day);
var dayName = daysList[day];
console.log(dayName);


// Calculate Time difference:
var date1 = new Date();
console.log(date1);
var date2 = new Date("1978 08 19");
console.log(date2);
var timeDiff = date1.getTime() - date2.getTime();
console.log(timeDiff);
var totalDays = timeDiff / (24 * 60 * 60 * 1000);
console.log(totalDays.toFixed());


// FUNCTIONS:
// Function Declarations:
function sum(a, b){
    return a + b;
}
// Function Invoking:
console.log(sum(10, 5)); // 15


// Function (Example):
function showMessage() {
    console.log("Hello World");
}
showMessage();


// Passing Data to Function (Example #1):
function multiply(num1, num2) {
    var result = num1 * num2;
    console.log("Result: " + result);
}
multiply(prompt(), prompt());


// Passing Data to Function (Example #2):
function greetings(name) {
    console.log("Welcome to PIAIC! " + name);
}
greetings(prompt("Enter your name please"));


// Parameter Rules:
function showMessage(name) {
    console.log("Hello "+name);
}
showMessage("Hamza");    // Hello Hamza
showMessage(45);        // Hello 45
showMessage(true);      // Hello true
showMessage();          // Hello undefined
showMessage("Hamza", 12);// Hello Hamza


//Grading Fuction:
function totalMarks(linux, docker, kubernetes, git) {
    return (linux + docker + kubernetes + git) * 100 / 400;
}
var obtainedMarks = totalMarks(Number(prompt("Enter Linux marks")), Number(prompt("Enter Docker marks")), Number(prompt("Enter Kubernetes marks")), Number(prompt("Enter Git marks")));

function checkGrade(obtainedMarks) {
    if (obtainedMarks >= 80 && obtainedMarks <= 100) {
        console.log("Congratulations! You have secured 'A+1' Grade");
    }
    else if (obtainedMarks >= 70 && obtainedMarks <= 79) {
        console.log("Congratulations! You have secured 'A' Grade");
    }
    else if (obtainedMarks >= 60 && obtainedMarks <= 69) {
        console.log("Congratulations! You have secured 'B' Grade");
    }
    else if (obtainedMarks >= 50 && obtainedMarks <= 59) {
        console.log("Congratulations! You have secured 'C' Grade");
    }
    else if (obtainedMarks >= 40 && obtainedMarks <= 49) {
        console.log("Congratulations! You have secured 'D' Grade");
    }
    else {
        console.log("Sorry! Unfortunately, You have been 'FAILED'");
    }
}
checkGrade(obtainedMarks);



// Days Calculating Function:
function calcDays(dob) {
    var curDate = new Date();
    var dob = new Date(dob);
    var calcDays = curDate.getTime() - dob.getTime();
    var totDays = calcDays/ (24 * 60 * 60 * 1000);
    console.log("You are " + totDays.toFixed() + " days old!");
}
calcDays(prompt("Enter your Date of Birth (DoB):"));


// FUNCTIONS:
// **********
// Function Return (Example #1): By default, a function returns "undefined" in JavaScript
function test() {
 
}
var a = test(); // return undefined
console.log(a); // undefined


// Function Return (Example #2):
function test1() {
    return 45;
}
var a = test1(); // return 45
console.log(a); // 45


// Function Return (Example #3):
function multiply(num1, num2) {
    return num1 * num2;
}
var a = multiply(3, 6); // returns 18
var b = multiply(4, 2); // returns 8
console.log(a); // 18
console.log(b); // 8


// Function Return (Example #4):
function multiply(num1, num2) {
    return num2; // function execution ends here due to "return"
    return num1 * num2;
}
var a = multiply(3, 6); // returns 6
console.log(a); // 6


// Function in Expressions (Example #1):
function multiply(num1, num2) {
    return num1 * num2;
}
var a = multiply(3, 4) + 5;
console.log(a); // 17


// Function in Expressions (Example #2):
function multiply(num1, num2) {
    return num1 * num2;
}
function sum(a, b) {
    return a + b;
} // Call multiply first and result passed to sum
var total = sum(multiply(3, 4), 2) + 6; // result 20
console.log(total);


// FUNCTION TYPES:
// 1. Simple function:
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3));

// 2. Function Expression:
var sum = function(a, b) {
    return a + b;
}

console.log(sum(4, 3));

// 3. Arrow Function (Sinel Line):
var calc = (num1, num2) => num1 + num2;
var result = calc(3, 5);
console.log(result);

// 4. Arrow Function (Multi Line):
var calc = (num1, num2) => {
    return num1 - num2;
};
var result = calc(7, 2);
console.log(result);

// LOCAL VS. GLOBAL VARIABLES:
// Local vs. Global Variables (Example #1):
var a = 7; // Global Variable
function sum() {
    var b = 6; // Local Variable
    var c = a + b; // 13, accessing global variable "a"
    console.log("C: " + c);
}
sum();
console.log("A: " + a); // 7


// Local vs. Global Variables (Example #2):
var a = 7; // Global Variable
function sum() {
    var b = 6; // Local Variable
    a = b + 5; // Global Variable (becoz it is without var)
    console.log("A " + a);// 11, accessing global variable
}
sum();
console.log("A = " + a); // 11, value of a updated


// Local vs. Global Variables (Example #3):
var a = 7; // Global Variable
function sum() {
    var b = 6; // Local Variable
    a = b + 5; // Global Variable, 11
}
sum();
console.log("A = " + a); // 11
console.log("B = " + b); // error, b is not available outside sum function


// Local vs. Global Variables (Example #4):
var a = 7; // Global Variable
function sum() {
    var a = 6; // Local Variable, a same name as global
    a = 3 + 2; // Local a variable will be affected
    console.log("A " + a);// 5, access local variable
}
sum();
console.log("A " + a); // 7, access global variable


// Global Variables without var keyword (Example #1)
a = 7; // Without var still Global Variable
function sum() {
    var b = 6; // Local Variable
    a = b + 5; // Gloabl Variable, 11
    console.log("A " + a);// Accessing global variable, 11
}
sum();
console.log("A " + a); // 11, value of a updated


// Global Variables without var keyword (Example #2)
a = 7; // Without var still Global Variable
function sum() {
    b = 6; // Global variable because its without var
    a = b + 5;
    console.log("A in function " + a);// Accessing global variable, 11
}
sum();
console.log("A out side function " + a);// 11
console.log("B out side function " + b); // b available outside of function, 6


// Global Variables without var keyword (Example #3)
var a = 7;
function sum() {
    b = 7;
    a = b + 1;
}
console.log("A before function ", a); // 7
console.log("B before function ", b); // Uncaught ReferenceError: b is not defined, bcoz function is to be called.
sum();
console.log("A after function ", a); // 8


// FUNCTION EXPRESSION: A function expression can be stored in a variable
// Function Expressions (Example #1):
var sum = function (a, b) { // function as expression
    return a + b;
}; // we add semicolon (;) here becuase it is a 'function as expression'
var c = sum(4, 5);
console.log(c); // 9


// Function Expressions (Example #2):
var square = function (num) { return num * num; }; // we add semicolon (;) here bcoz of 'function as expression'
var b = square(4); // 16
console.log(b);


// Function Hoisting (Calling a function before declaration): Example #1
var result = sum(3, 2); // Calling before declaration
console.log(result); // 6

function sum(a, b) {
    return a + b;
}


// Function Hoisting (Calling a function before declaration): Example #2
console.log("Before: "+a); // undefined, because the function is only declared not executed
var a = 5;
console.log("After: "+a); // After: 5


// Function Hoisting (Calling a function before declaration): Example #3
var mul = multiply(2, 3);
console.log("Multiply " + mul); // 6

var add = sum(4, 3);
console.log("Addition " + add); // Uncaught TypeError: sum is not a function

function multiply(num1, num2) {
    return num1 * num2;
}

var sum = function (a, b) {
    return a + b;
}


// Arguments Passed by Value (Example): Value means Primitive data like string, number, boolean, etc
var num = 5;
function changeValue(a) {
    console.log("A before: "+a); // 5
    a = 7; // change to "a" won't affect num
    console.log("A after: "+a); // 7
}
changeValue(num);
console.log("Num after "+num);//5, num will not be updated


// Arguments Passed by Reference (Array Exmaple #1): // Reference means Non-primitive values like array & object
var num = [45, 4, 9, 2];
function changeValue(val) {
    console.log("Val before: "+val); // 45, 4, 9, 2
    val[2] = 12; // change to "val" will affect num
    console.log("Val after: "+val); // 45, 4, 12, 2
}
changeValue(num);
console.log("Num after "+num); // 45, 4, 12,2 num will be updated


// Arguments Passed by Reference (Array Exmaple #2):
var num = [45, 4, 9, 2];
function changeValue(val) {
    console.log("Val before: " + val); // 45, 4, 9, 2
    val = [2, 1, 8, 3];
    val[2] = 88; // change to "val" won't affect num, becoz of new arry of val
    console.log("Val after: "+val); // 2, 1, 88, 3
}
changeValue(num);
console.log("Num after "+num); // 45, 4, 9, 2 num will be updated


// Arguments Passed by Reference (Array Exmaple #3):
var arr = [4, 6, 7, 9];
function updateArray(val) { // array received in val
    val[1] = 57; // updating val will also update arr
}
console.log(arr[1]); // 6 before calling function
updateArray(arr);
console.log(arr[1]); // 57 after calling function


// Arguments Passed by Reference (Object Exmaple #4):
var obj = { name: "John", age: 56 };
function updateObject(val) { // object received in val
    val.age = 40; // updating val will also update arr
}
console.log(obj.age); // 56 before calling function
updateObject(obj);
console.log(obj.age); // 40 after calling function

// Recursive Function: A recursive function is a function that calls itself.
function factorial(n) {
    if (n <= 1) { // Recursion will stop when this condition matches
        return 1;
    }
    else {
        return n * factorial(n - 1); // calling itself
    }
}
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));


// SWITCH STATEMENT:
// Switch Statement (Example #1):
// Switch statement works for "equality checks only", we can't apply range, greater than or less then checks.
var day = 3;
switch (day) {
    case 6:
        console.log("Today is Saturday");
        break;
    case 0:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Looking forward to the Weekend");
}


// Switch Statement - Vowel Character Checking (Example #2):
var x = prompt("Please enter character:");
switch (x.toLowerCase()) {
    case "a":
        console.log(x+" is vowel");
        break;
    case "e":
        console.log(x+" is vowel");
        break;
    case "i":
        console.log(x+" is vowel");
        break;
    case "o":
        console.log(x+" is vowel");
        break;
    case "u":
        console.log(x+" is vowel");
        break;
    default:
        console.log(x+" is Constant");
}


// Switch Statement - Grouping of cases (Example #1):
var day = 6;
switch (day) {
    case 6:
    console.log("Today is Saturday");
    // No break in the last, both cases will execute
    case 0:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Looking forward to the Weekend");
}


// Switch Statement - Grouping of cases (Example #2):
var day = 3;
switch (day) {
    case 6:
    case 0:
        console.log("Yaaaa! It's Weekend");
        break;
    default:
        console.log("Looking forward to the Weekend");
}


// Switch Statement - Strict Comparison (===):
var x = "0"; // don't conver into number because of strict comparision
switch (x) {
    case 0:
        console.log("Off");
        break;
    case 1:
        console.log("On");
        break;
    default: // this will execute as value did not match
        console.log("No value found");
}


// While Loop (Example #1): We use "while" loop when execution is dependent on user's input.
var i = prompt("Please enter value");
while (i < 10) {
    console.log("I " + i);
    i++;
}



// While Loop (Example #2):
var doContinue = true;
while (doContinue) {
    // console.log("Hello");
    var input = prompt("Please enter 'Y' to run again or any key to stop");
    if (input.toLowerCase() !== "y") {
        doContinue = false;
    }
}
console.log("While loop has been stopped");



// Do/While Loop: We use "do/while" loop when execution is dependent on user's input
// but it needs to run code block at least once.
var i = prompt("Please enter value");
do {
    console.log("I " + i);
    i++;
}
while (i < 10);

// ===================================================================================
//                                 :: THE END ::
// ===================================================================================