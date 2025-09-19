const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI)

// const mynewObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log("Before:", Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
});

console.log("After:", Object.getOwnPropertyDescriptor(chai, "name"));
