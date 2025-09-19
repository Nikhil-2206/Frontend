function multipleBy5(num){
    this.num = num
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score }`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)


chai.printMe()

/*
When the new keyword is used in JavaScript, the first step is the creation of a new empty object. 
This object acts as the instance that will eventually be returned from the constructor function. 
At this point, the object doesn’t have any properties defined by the constructor; it’s just an empty container waiting to be filled.

The next step is that JavaScript sets the prototype of the new object. 
Specifically, the internal [[Prototype]] of the newly created object is linked to the prototype property of the constructor function. 
This ensures that the new object inherits methods and properties defined on the constructor’s prototype, enabling features like method sharing and inheritance.

After setting up the prototype chain, the constructor function is executed.
 The this keyword inside the constructor is automatically bound to the newly created object. 
 This allows the constructor to add properties and methods directly to that instance, such as setting values for fields or initializing state. 
 For example, if the constructor assigns this.name = "Car", that property is added to the new object.

The constructor function may or may not explicitly return a value.
 If it returns a non-primitive value (like another object), JavaScript will return that object instead of the newly created one.
  However, if the constructor doesn’t return anything, or if it returns a primitive value like a string or number, JavaScript will simply return the new object that was initially created.

Finally, the result of the new expression is a fully constructed object instance. 
This object has its own properties (defined in the constructor) and also inherits properties and methods from its prototype.
 In this way, the new keyword combines object creation, prototype linking, and constructor execution into a single, simple-looking operation.
*/