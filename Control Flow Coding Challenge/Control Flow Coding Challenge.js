/*
Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.
*/

let number = 10;
if(number%2==0)
{
    console.log('That is an even number');
}
else
{
    console.log('That is an odd number');
}


/*Write a program based on age and displays a message based on their age using an if-else if statement:
let age = 24;
If the age is less than 18, display "You are a minor".
If the age is between 18 and 65 (inclusive), display "You are an adult".
If the age is greater than 65, display "You are a senior citizen".
*/

let age = 24;
let message = '';
if(age<18)
{
    message = 'You are a minor';
}
else if (age >= 18 && age <= 65)
{
    message = 'You are an adult';
}
else if (age > 65)
{
    message = 'You are a senior citizen';
}
console.log(message);


//Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement.
let letter = 'e';
let vowels = ['a', 'e', 'i', 'o', 'u'];
message = '';
if(vowels.includes(letter))
{
    message = 'That letter is a vowel';
}
else
{
    message = 'That letter is a consonant';    
}
console.log(message);


//Write a program based on three numbers and displays the largest number using an if-else statement.
let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;
if(numberOne > numberTwo && numberOne > numberThree){
    message = numberOne.toString();
}
else if (numberTwo > numberOne && numberTwo > numberThree){
    message = numberTwo.toString();
}
else if (numberThree>numberOne&&numberThree>numberTwo){
    message = numberThree.toString();
}
console.log('The largest number is ' + message);


//Write a program based on given password and displays a message based on the password using an if-else statement
let password = 'Test1233';
let longEnough = password.length>=8;
let containsLettersAndNumbers = /[A-Z]/i.test(password) && /[0-9]/.test(password);
if(!longEnough && !containsLettersAndNumbers)
{
    message = 'Password rejected';
}
else if (!longEnough)
{
    message = 'Password too short';
}
else if (containsLettersAndNumbers)
{
    message = 'Password accepted';
}
console.log(message);




