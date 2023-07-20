//Write a function that takes in two arrays of numbers and returns a new array containing all the elements of both arrays
function CombineArrays(firstArray, secondArray){
    return [...firstArray, ...secondArray];
}
//example given
const array1 = [1,2,3];
const array2 = [4,5,6];
const combined = CombineArrays(array1, array2);
console.log(...combined);

//Write a function that takes in an array of strings and a string to add to 
//the beginning of the array, and returns a new array with the string added to the beginning.
function AddStringToBeginning(stringArray, string){
    return [string, ...stringArray];
}
//example given
const originalArray = ['banana', 'apple', 'cherry'];
const newArray = AddStringToBeginning(originalArray, 'watermelon');
console.log(...newArray);


//Write a function that takes in an object and a key-value pair to add to the object, 
//and returns a new object with the key-value pair added.
function AddProperty(object, key, value){
    return {...object, [key]:value};
}
//example given
const originalObject = {name:'John', age:30};
const newObject = AddProperty(originalObject, 'place', 'home');
console.log(newObject);


//Write a function that takes in an array of numbers and returns the largest number in the array.
function Largest(array){
    return Math.max(...array);
}
//example given
const numbersArray = [4,8,1,6,9,2];
let largestNumber = Largest(numbersArray);
console.log(largestNumber);


//Write a function that takes in an array of strings and returns a new array containing all 
//the strings in alphabetical order.
function Alphabetize(stringArray){
    return stringArray.sort();
}
//example given
console.log(...Alphabetize(['banana', 'apple', 'cherry']));