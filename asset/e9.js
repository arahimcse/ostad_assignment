/**
 * Exercise 9: 
 * 
 * Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method
 * 
 * Example:
 * 
 * Input:
 * 
 * filterEvenNumbers([1, 2, 3, 4, 5]);
 * 
 * Output:
 * [2, 4]
 */
function filterEvenNumbers(x)
{
const filterData = x.filter( a => a%2==0 ? a : null);
return filterData;
}

//show result in bowser console panel
console.log(filterEvenNumbers([1,2,3,4,5]));

//show result in html tag
document.getElementById("exercise9").innerHTML = filterEvenNumbers([1,2,3,4,5]);