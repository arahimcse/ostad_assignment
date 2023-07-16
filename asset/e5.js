/**
 * Exercise 5: 
 * 
 * Convert the following function to an arrow function:
 * 
 * function multiply(a, b) {
 *   return a * b;
 * }
 * 
 */
let arrowFunction = (a,b)=> a*b;

//show arrow function in browser console panel.
console.log(arrowFunction);

//show arrow function and result in html tag
document.getElementById("exercise5").innerHTML = arrowFunction   + "   [and result for 4 & 5 is =" + arrowFunction(4,5) + "]";