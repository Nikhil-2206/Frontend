const user ={
    username: "Nick",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    }
//this return current context
}

// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "nick"
//     console.log(this.username)
// }
// chai()


// const chai = function (){
//     let username = "Nick"
//     console.log(this.username)
// }

//Arrrow Function
// const chai =  () => {
//     let username = "Nick"
//     console.log(this)
// }

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => ({username: "Nick"})
// console.log(addTwo(3,4))

