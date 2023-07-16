/**
 * Exercise 11: 
 * 
 * Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method
 * 
 * Example:
 * 
 * Input:
 * 
 * sortNumbers([5, 2, 8, 1, 4]);
 * 
 * Output:
 * [1, 2, 4, 5, 8]
 */

function sortNumbers(x)
{
 const sortData = x.sort((a,b) => a-b); 
 return sortData;
}

//show the result in browser console panel
console.log(sortNumbers([5,2,8,1,4]));

//show result in html tag
document.getElementById("exercise11").innerHTML = sortNumbers([5,2,8,1,4]);