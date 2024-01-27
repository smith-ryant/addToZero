// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Instructions:
/*
Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:
    [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
    [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.
    [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
    */

// Write your solution below:
function checkSumIsZero(arr) {
    const emptyObject = {};
  
    for(let i = 0; i < arr.length; i++) {
        if(emptyObject[arr[i]]) {
            console.log(true);
            return;
        }
        emptyObject[-arr[i]] = true;
    }
    console.log(false);
    return;
}
//checkSum(array[]);
checkSumIsZero([1, 4, 11, 2, 37, -4]); //logs true
checkSumIsZero([0, 21, 33, 6, 0, -9]); //logs true
checkSumIsZero([0, 1, 2, 3, 4, 5]); //logs false
checkSumIsZero(array);
// EXPLANATION:
/*
This JavaScript function is checking whether any two numbers in an array can sum up to zero.

In detail, the checkSum function:

Takes an array (arr) as an argument.

An empty object map is declared.

Iterates over the array (arr) with a for-loop.

For each iteration, it checks if the current element already exists as a property in the map object. Since initially negative value of array element is put in the map, if it finds any positive value which previously was in there, that implies their sum is zero.

If the property does exist, it logs 'true' to the console and immediately ends the function with the return statement. This indicates that there are two numbers in array whose sum is zero.

If the property does not exist, it adds the negative of the current array element as a property to map object and gives it a boolean value of true.

If the function does not find any pair of numbers that sum up to zero by the end of the array, it logs 'false' to the console.

checkSum function calls validate the aforementioned functionality.
*/