//Write a function that takes an array of objects representing books and returns an array containing the titles of those books
function GetTitle (objectArray){
    return objectArray.map(i=>i.title)
}
let books = [
    {
        title: 'Book Alpha',
        author: 'Wolf',
        published: 1887
    },
    {
        title: 'Beta and The Gamma',
        author: 'Sheep',
        published: 244
    },
    {
        title: 'Animal Behaviour in Captivity',
        author: 'Not-A-Scientist',
        published: 2001
    },
    {
        title: 'I Like Trains',
        author: 'Dumbledore',
        published: 2525
    }
]
console.log(GetTitle(books));


/*
Write a function that takes an array of objects representing products and 
returns an array containing only the products that are currently in stock.
*/
function InStock(productArray){
    return productArray.filter(i=>i.amount>0);
}
let products = [
    {
        name: 'apple',
        amount: 5,
        color: 'red'
    },
    {
        name: 'banana',
        amount: 0,
        color: 'yellow'
    },
    {
        name: 'pinepear',
        amount: 200000,
        color: 'magenta'
    },
    {
        name: 'depression',
        amount: 1,
        color: 'blue'
    }
]
console.log(...InStock(products));


/*
Write a function that takes an array of objects representing users and returns the 
first user whose email address matches a given email.
*/
function GetUserFromEmail(userObjectArray, matchingEmail){
    return userObjectArray.filter(i=>i.email==matchingEmail);
}
let users = [
    {
        name: 'Boberson',
        email: 'Boberson@Boberson.com',
        galaxy: 'Milky Way'
    },
    {
        name: 'Stephannny',
        email: 'ThePope@Poperson.com',
        galaxy: 'Andromeda'
    },
    {
        name: 'Square Boy',
        email: 'Rectangle@Shapes.com',
        galaxy: 'Triangulum'
    },
    {
        name: 'The Great Old One',
        email: 'CosmicHorror@Eldritch.com',
        galaxy: 'Messier 81'
    }
]
console.log(...GetUserFromEmail(users, 'CosmicHorror@Eldritch.com'));


/*
Write a function that takes an array of objects representing tasks and returns
 true if all the tasks are marked as complete, otherwise returns false.
*/
function CompletedAllTasks(tasks){
    //Search array of task objects for one that is not completed
    //If it can't find one, returning undefined, we know not one task is uncomplete
    //Or all are complete, hence return true
    //Otherwise return false
    if(tasks.find(i=>i.completed==false)==undefined){
        return true;
    }
    return false;
}
let tasks = [
    {
        title: 'Do Laundry',
        completed: true
    },
    {
        title: 'Walk Dog',
        completed: true
    },
    {
        title: 'Overthrow Capitalism',
        completed: false
    },
    {
        title: 'Have a nap',
        completed: true
    }
]
console.log(CompletedAllTasks(tasks));


/*
Write a function that takes an array of objects representing purchases and 
returns the total amount spent on those purchases.
*/
function TotalSpent(purchaseArray){
    let total = 0.00;
    purchaseArray.map(i=>total += i.cost);
    return total;
}
let purchases = [
    {
        product: 'Couch',
        cost: 299.99
    },
    {
        product: 'Lawn Chair',
        cost: 39.95
    },
    {
        product: 'Self-Actualism',
        cost: 0.01
    },
    {
        product: 'Bumble Bee',
        cost: 326.71
    }
]
console.log(TotalSpent(purchases));


/*
Write a function that takes an array of numbers as input and returns
 the sum of all the numbers in the array.
*/
function AddArray(array){
    let total = 0;
    array.map(i=>total+=i);
    return total;

    //Alternative
    //return array.reduce((a,b) => a + b, 0);
}
console.log(AddArray([10,9,8,7,6,5,4,3,2,1]));


/*
Write a function that takes an array of strings as input and returns a
 new array with all the strings converted to uppercase.
*/
function ToUpperCase(stringArray){
    return stringArray.map(i=>i.toUpperCase());
}
console.log(...ToUpperCase(['all lowercase', 'soMe upPercasE', 'ALL UPPERCASE', 'bob boberson']));


/*
Write a function that takes an array of numbers as input and returns a 
new array with all the even numbers from the original array.
*/
function AllEven(numberArray){
    return numberArray.filter(i=>i%2==0);
}
console.log(AllEven([1,2,3,4,5,6,7,8,9,10]));


/*
Write a function that takes an array of strings as input and returns a 
new array with all the strings that have a length of 4 or less.
*/
function MinLength4(stringArray){
    return stringArray.filter(i=>i.length<=4);
}
console.log(MinLength4(['apple', 'bapple', 'poot', 'thecapitaloftexasistexas', 'icrematedsammcgee', 'papple']));