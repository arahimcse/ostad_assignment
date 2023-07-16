/**
 * Exercise 10: 
 * 
 * Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.
 * 
 * Example:
 * 
 * Input:
 * sumArray([1, 2, 3, 4, 5]);
 * 
 * Output:
 * 15
 */

function sumArray(x)
{
    let sum = x.reduce((a, c) => a + c ); //a=accumulator, c=currentValue
    return sum;
}

//show result in browser console panel
console.log(sumArray([1,2,3,4,5]));

//show result in html tag
document.getElementById("exercise10").innerHTML = sumArray([1,2,3,4,5]);