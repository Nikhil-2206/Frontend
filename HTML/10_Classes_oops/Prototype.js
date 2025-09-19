// let myName = "Nikhil    "
// let mychannel = "chai    "


// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spoderman: "sling",

   getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
   }
}

Object.prototype.Nikhil = function(){
    console.log(`Nikhil is present is all objects`)
}

Array.prototype.heyNikhil = function(){
    console.log(`Nikhil say hello`)
}

// heroPower.Nikhil()
// myHeros.Nikhil()
// myHeros.heyNikhil()
// heroPower.heyNikhil()

//INHERITANCE

const User ={
    name:"chai",
    email: "cjai@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

//MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLenght = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLenght()
"Nikhil".trueLenght()
"iceTea".trueLenght()
