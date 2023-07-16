/**
 * Exercise 3:
 * 
 *  Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
 * 
 * Example:
 * 
 * Input:
 * createGreeting('Alice');
 * 
 * Output:
 * "Hello, Alice! Welcome to our website."
 * 
 */

function createGreeting(name)
{
    return `"Hell, ${name}! Welcome to our website."`;
}

//show result in browser console panel
console.log(createGreeting('Alice'));

//show result in html tag
document.getElementById("exercise3").innerHTML = createGreeting('Alice');