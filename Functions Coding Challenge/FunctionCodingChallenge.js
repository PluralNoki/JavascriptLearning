//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
function AddArray(array){
    let sum = 0;
    array.forEach(i => {
        sum+=i;
    });
    return sum;
}
console.log(AddArray([1,2,3,4,5])); //15


//Write a function that takes in a string and returns the string reversed.
function ReverseString(string){
    let stringArray = [...string];
    stringArray.sort(function (a,b){
        return a>b?-1:b>a?1:0;
    });
    return stringArray.join('');
}
console.log(ReverseString('abcd')); //dcba


/*
Write a function that takes in an array of objects representing people, 
where each object has properties for name, age, and gender, and returns an 
array of objects representing only the people who are over the age of 18.
*/
function AdultsOnly(objectArray){
    let returnArray = [];
    objectArray.forEach( i => {
        if(i.age>18) returnArray.push(i);
        else console.log('no go for ' + i.name);
    });
    return returnArray;
}
let objectArray = [
    {name: 'susan', age: 22, gender:'female'},
    {name: 'jeffry', age: 13, gender:'male'},
    {name: 'bolan', age: 55, gender:'blank'}
];
let x = AdultsOnly(objectArray);
console.log(...x);


/*
Write a function that takes in an array of numbers and returns a new array 
containing only the even numbers from the original array.
*/
function Evens(numberArray){
    return numberArray.filter(i=>i%2==0);
}
console.log(...Evens([1,2,3,4,5,6,7,8,9,10]));


/*
Write a function that takes in an array of strings and returns a new array 
containing only the strings that start with the letter "A".
*/
function AOnly(stringArray){
    return stringArray.filter(i=>i.charAt(0).toLowerCase()=='a');
}
console.log(...AOnly(['Abba', 'altitude', 'baltitude', 'Babba'])); //Abba altitude


/*
Write a function that takes in an array of objects representing books, where 
each object has properties for title, author, and published, and returns an array of 
strings representing the titles of all the books published in the year 2000 or later.
*/
function Post2000Books(bookObjectArray){
    return bookObjectArray.filter(i=>i.published>=2000);
}
let books = [
    {
        title: 'The First Book Ever Written',
        author: 'Your Mom',
        published: 1
    },
    {
        title: 'The Second Book Ever Writen',
        author: 'Your Other Mom',
        published: 2001
    },
    {
        title: 'A Book Never Written',
        author: 'Your Dad',
        published: 2025
    },
    {
        title: 'A Book Never Read',
        author: 'You',
        published: 702
    }
]
console.log(...Post2000Books(books));


//Write a function that takes in two numbers and returns the larger of the two.
function Max(numberA, numberB){
    return Math.max(numberA, numberB);
}
console.log(Max(7,3)); //7


//Write a function that takes in an array of numbers and returns the smallest number in the array.
function Min(numbers){
    return numbers.sort()[0];
}
console.log(Min([3,1,6,5])); //1


//Write a function that takes in an array of strings and returns the longest string in the array.
function LongestStringInArray(stringArray){
    stringArray.sort((a,b)=>b.length-a.length);
    return stringArray[0];
}   
console.log(LongestStringInArray(['short', 'reallyLong', 'middle'])); //reallyLong


/*
Write a function that takes in an array of objects representing students, where each object 
has properties for name and grade, and returns an array of objects representing only the 
students who have a grade of "A".
*/
function GradeA(arrayOfStudentObject){
    return arrayOfStudentObject.filter(i=>i.grade=='A');
}
let students = [
    {
        name: 'Harry Potter',
        grade: 'C'
    },
    {
        name: 'Hermione Granger',
        grade: 'A'
    },
    {
        name: 'Ronald Weasley',
        grade: 'D'
    },
    {
        name: 'Luna Lovegood',
        grade: 'B'
    },
    {
        name: 'Neville Longbottom',
        grade: 'A'
    },
]
console.log(...GradeA(students));