/**
 * Exercise 8: 
 * 
 * Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.
 * 
 * Example:
 * 
 * Input:
 * doubleNumbers([1, 2, 3, 4, 5]);
 * 
 * Output:
 * [2, 4, 6, 8, 10]
 */

function doubleNumbers(x)
{
 const newArr = x.map( a => a*2);
 return newArr;
}

//show result in browser console panel
console.log(doubleNumbers([1,2,3,4,5]));

//show result in html tag
document.getElementById("exercise8").innerHTML = doubleNumbers([1,2,3,4,5]);