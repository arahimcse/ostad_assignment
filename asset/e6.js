/**
 * Exercise 6: 
 * 
 * Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
 * 
 * Example:
 * 
 * Input:
 * getLargestNumber(10, 5);
 * 
 * Output:
 * 10
 * 
 * */

function getLargestNumber(a,b)
{
 return (a > b) && (a != b) ? a : b;
}

//show result in browser console panel
console.log(getLargestNumber(10,5));

//show result in html tag
document.getElementById("exercise6").innerHTML = getLargestNumber(10,5);