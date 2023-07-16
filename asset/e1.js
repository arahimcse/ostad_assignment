
/**
 * Exercise 1:
 * 
 * Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.
 * 
 * Example:
 * 
 * Input:
 * const obj = { name: 'John', age: 30, city: 'New York' };
 * const arr = [10, 20, 30, 40];
 * 
 * Output:
 * { name: 'John', age: 30 }
 * 
 * */

function destructureExample(x, y){

    //object destructure
    const {name, age} = x;

    //array destructure for index 0, and 2;
    const [firstIndex, , thirdIdex,] = y;

    //return an object with the extracted values as properties with name and age.
    return {name:name, age:age};
}

//input values
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

//show result in browser console panel. 
console.log(destructureExample(obj,arr)); 

//show result in html tag. HTML tags cann't show the object details
document.getElementById('exercise1').innerHTML =`{name: '${destructureExample(obj, arr).name}', age: ${destructureExample(obj, arr).age}}`; 