/**
 * Exercise 4: 
 * 
 * Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.
 * 
 * Example:
 * 
 * Input:
 * isEven(7);
 * 
 * Output:
 * "Odd"
 * 
 */

function isEven(num)
{
   return (num%2==0) ? '\"Even\"' : '\"Odd\"';
}

//show result in borwser console panel
console.log(isEven(7));

//show result in html tag
document.getElementById("exercise4").innerHTML = isEven(7);