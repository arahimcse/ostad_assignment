
    /**
 * Exercise 2:
 * 
 * Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
 * 
 * Example:
 * 
 * Input:
 * sumNumbers(1, 2, 3, 4, 5);
 * 
 * Output:
 * 15
 * 
 * */

function sumNumbers(...args)
{
    let sum = 0;
    for(let value of args)
    {
        sum +=value;
    }
    return sum;
}

//show result in browser console panel
console.log(sumNumbers(1,2,3,4,5));

//input data and show results
document.getElementById("exercise2").innerHTML = sumNumbers(1,2,3,4,5);

