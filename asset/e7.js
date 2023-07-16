/**
 * Exercise 7: 
 * Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining
 * 
 * Example:
 * Input:
 * const address = { street: '123 Main St', country: 'USA' };
 * 
 * Output:
 * "Unknown"
 */

function getAddressCity(x) {
    
    // checking 'city' property in address object exists or not using "Optional Chaining"
    const cityName = x?.city;

    //return city name if set in the object or string "Unknown"
    return (cityName != undefined) ? cityName : '\"Unknown\"';
}

//input data
const address = {street: '123 Main St.', country: 'USA'};

//show the result in borwser console panel
console.log(getAddressCity(address));

//show result in html tag
document.getElementById("exercise7").innerHTML = getAddressCity(address);