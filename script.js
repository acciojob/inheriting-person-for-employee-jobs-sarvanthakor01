// complete this js code
// Define the Person class
// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet method to Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor function (inherits from Person)
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up prototype inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet method to Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change the code below
window.Person = Person;
window.Employee = Employee;
