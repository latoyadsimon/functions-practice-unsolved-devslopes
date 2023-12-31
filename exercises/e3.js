// FUNCTIONS: Early return
// BEFORE YOU START: please read the /exercises-info/e3.md file.

/**
 * ====================================================
 * Create a function that works as follows:
 * The function name is 'doesArrayIncludeItemsBetweenVals'
 * given an array of numbers. You can use it as the arr for testing purposes
 * The function take an arr (array), val1 (number) and val2 (number) as arguments.
 * The function returns a boolean if array includes an item that is greater than val1 and less than val2
 * The function MUST have 2 return statements: make an early return if the item is found and use the default return otherwise
 * The function MUST be written with NAMED function syntax.
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 3, 5) => true
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 5, 10) => false
 */

// Your code goes here...
function doesArrayIncludeItemsBetweenVals(arr, val1, val2) {
    let targetValues = [];
    console.log("this is val1 ", val1);
    console.log("This is val2 ", val2);
    console.log("This is arr ", arr);
     for ( let i = 0; i < arr.length; i++) {
        let targetVal = arr[i];
        //console.log("this is the item in array ", targetVal);
        if(targetVal !== val1 && targetVal !== val2 && targetVal > val1 && targetVal < val2 ) {
            console.log("This targetVal is what we need! ", targetVal);
            targetValues.push(targetVal);
            // this return is inside of the if statement because we want a return the moment a match shows up.
            return true;
        }
        //    else {
             //     console.log("We do not need this one: ", targetVal);
             //    }
    }
    // the false needed to come after the for loop, so all items could be iterated through
    // console.log("targetValues above false: ", targetValues.length);
    if(!targetValues.length) {
        console.log("Your Princess is in another Castle...");
        return false;
    }
}





/**
 * ====================================================
 * Please read the /exercises-info/e4.md file. It describes different types of syntax to write functions
 * Create three functions using 3 types of syntax: named, arrow and function expression (with anonymous function)
 * Named function: getValueWithConditionOne;
 * Arrow Function name: getValueWithConditionTwo;
 * Variable name for the function expression: getValueWithConditionThree;
 * All three functions resolve the same task:
    * The function takes two numbers as arguments
    * If the numbers are both equal to 40, return the sum of them
    * Else return the doubled sum of them
 * getValueWithConditionOne(40, 40) => 80;
 * getValueWithConditionOne(20, 30) => 100;
 */

// Your code goes here...

// * Named function: getValueWithConditionOne;
function getValueWithConditionOne(num1, num2) {
if(num1 === 40 && num2 === 40) {
    return Number(num1 + num2);
}else {
    return Number((num1+num2)*2);
}
}
//  * Arrow Function name: getValueWithConditionTwo;
const getValueWithConditionTwo = (num1, num2) => {
if(num1 === 40 && num2 === 40) {
    return Number(num1 + num2);
}else {
    return Number((num1+num2)*2);
}
}
//  * Variable name for the function expression: getValueWithConditionThree;
const getValueWithConditionThree = function (num1, num2) {
if(num1 === 40 && num2 === 40) {
    return Number(num1 + num2);
}else {
    return Number((num1+num2)*2);
}
}
//  * All three functions resolve the same task:
//     * The function takes two numbers as arguments
//     * If the numbers are both equal to 40, return the sum of them
// if(num1 === 40 && num2 === 40) {
//     return Number(num1 + num2);
// }else {
//     return Number((num1+num2)*2);
// }
//     * Else return the doubled sum of them


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  doesArrayIncludeItemsBetweenVals: doesArrayIncludeItemsBetweenVals || undefined,
  getValueWithConditionOne: getValueWithConditionOne || undefined,
  getValueWithConditionTwo: getValueWithConditionTwo || undefined,
  getValueWithConditionThree: getValueWithConditionThree || undefined,
}
export { f };
