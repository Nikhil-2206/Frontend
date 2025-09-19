//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai =  new User("chai", "chail@gamil.com", "1234")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername())

//behind the scene
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

// Example usage
const tea = new User("tea", "tra@gmail.com", "123");

console.log(tea.encryptPassword()); // Output: 123abc
console.log(tea.changeUsername());  // Output: TEA
