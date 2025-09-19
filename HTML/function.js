function sayMyName(){
   console.log("N")
   console.log("I")
   console.log("K")
   console.log("H")
   console.log("I")
   console.log("L")
}

//sayMyName()
//ADD TO NUMBER

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

function addTwoNumbers(number1, number2){
    let result= number1 + number2
    return result
}

//addTwoNumbers(2,4)
// const result = addTwoNumbers(2,4)
// console.log(result)


function loginUserMessage(username="Nikhil"){
    if(!username){
        console.log("PLease enter  a username")
        return
    }return `${username} just logged in`
}

//console.log(loginUserMessage("NIKHIL"))
//console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 700, 400))

//Handle Object in jS
const user ={
    username: "Nikhil",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "nikc",
    price: 499
})

//Array
const myNewArray= [200, 400, 100, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))
