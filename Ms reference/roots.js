// roots.js 
//   Compute the real roots of a given quadratic
//   equation. If the roots are imaginary, this script
//   displays NaN, because that is what results from 
//   taking the square root of a negative number

// Get the coefficients of the equation from the user

var a = prompt("What is the value of 'a'? \n", "");
var b = prompt("What is the value of 'b'? \n", "");
var c = prompt("What is the value of 'c'? \n", "");

// Compute the square root and denominator of the result

//var root_part = Math.sqrt(b * b - 4.0 * a * c);
//var denom = 2.0 * a;

// Compute and display the two roots

//var root1 = (-b + root_part) / denom;
//var root2 = (-b - root_part) / denom;

var summation=Number(a)+Number(b)+ Number(c);
document.write("The sum is: ", summation, "<br />");


