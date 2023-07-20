/*
Create a class called Animal that has a name property and a 
speak method. The speak method should log a message to the 
console saying "Hello, my name is {name}." Create an instance 
of the Animal class and call the speak method.
*/
class Animal {
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
let Dog = new Animal('Bog');
Dog.speak();


/*
Create a class called Person that has name and age properties, 
and a greet method that logs a message to the console saying "Hello, 
my name is {name} and I am {age} years old." Create an instance of the 
Person class and call the greet method.
*/
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let Human = new Person('Not-An-Alien', 4001);
Human.greet();


/*
Create a class called Car that has make, model, and year properties, 
and a start method that logs a message to the console saying "The {make} {model} 
is starting." Create an instance of the Car class and call the start method.
*/
class Car{
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    start(){
        console.log(`The ${this.make} ${this.model} is starting.`);
    }
}
let SkateBoard = new Car('Wood', 'Trickster', '1843');
SkateBoard.start();


/*Create a class called Rectangle that has width and height properties, 
and a getArea method that returns the area of the rectangle. Create an 
instance of the Rectangle class and call the getArea method.
*/
class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    
    getArea(){
        return this.width*this.height;
    }
}
let Circle = new Rectangle(5,5);
console.log(Circle.getArea());


/*Create a class called Square that extends the Rectangle class and has a 
sideLength property. Override the getArea method in the Square class to 
return the area of the square. Create an instance of the Square class and 
call the getArea method.
*/
class Square extends Rectangle{
    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    getArea(){
        return this.sideLength^2;
    }
}
let newSquare = new Square(8);
console.log(newSquare.getArea());


/*
Create a class called BankAccount that has accountNumber, accountHolderName, 
and balance properties, and a deposit method that takes in an amount and adds 
it to the balance. Create an instance of the BankAccount class and call the 
deposit method with an amount.
*/
class BankAccount{
    constructor(accountNumber, accountHolderName, balanceProperties){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.balanceProperties=balanceProperties;
    }

    deposit(amount){
        this.balanceProperties+=amount;
    }
}
let retirementFund = new BankAccount(876305, 'John val John', 0.01);
retirementFund.deposit(0.02);
console.log(retirementFund.balanceProperties);


/*
Create a class called Person that has name and email properties, and a 
sendEmail method that takes in a message and sends an email to the person's 
email address. Create an instance of the Person class and call the sendEmail 
method with a message.
*/
class Person2 {
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    sendEmail(message){
        console.log(`${this.name} recieved an email. It reads: ${message}`);
    }
}
let anotherPerson = new Person2('Boberson', 'Boberson@Bob.com');
anotherPerson.sendEmail('Who is this Boberson person and why are we mortal enemies?!');


/*
Create a class called Product that has name, price, and description properties, 
and a discount method that takes in a percentage and returns the discounted price. 
Create an instance of the Product class and call the discount method with a percentage.
*/
class Product{
    constructor(name, price, description){
        this.name=name;
        this.price=price;
        this.description=description;
    }

    discount(percentOff){
        return this.price*((100-percentOff)/100);
    }
}
let pearTV = new Product('Pear TV', 400, 'Its actually just a pear, not a tv.')
console.log(pearTV.discount(20));