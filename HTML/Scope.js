// let a = 10
// const b =  20
// var c = 30

// let a = 300//local scope
// if(true){
//    let a = 10//Global scope
//    const b =  20
//    console.log("INNER: ", a)
// }

// console.log(a)

// console.log(a)
// console.log(b)

// function one(){
//     const username = "nick"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     consoles.log(website)

//     two()
// }
// one()

//

console.log(addone(5))

function addone(num){
    return num + 1
}


//throw error
addTwo(5)
const addTwo =function(num){
    return num + 2
}

