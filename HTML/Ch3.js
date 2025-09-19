//LOOP
//  for(let count =1; count<=5; count++){
//     console.log("NICK")
//  }

 //To Calculate sum of 1 to n 
//  let sum = 0;
//  let n =100
//  for(let i =1; i<=n; i++){
//     sum = sum + i
//  }
//  console.log(sum)
//  console.log("Loop Has End")

 //while loop
//  let i = 1
//  while(i <= 5){
//     console.log("i = ", i)
//     i++
//  }

 //do-while loop
//  let i =20;
//  do{
//     console.log("nick")
//     i++
//  }while (i <= 10);

//FOR-OF LOOP
// let str = "NICK"

// let size =0;
// for (let i of str){
//     console.log("i=", i);
//     size++
// }
// console.log("string size =", size)

//For In Loop

// let student ={
//     name: "nikhil kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let key in student){
//     console.log("Key=", key)
// }

//Q1 print all even number from 0 to 100
//let num =0
// for(let num = 0; num<=100; num++ ){
//     if(num %2!==0){
//         console.log("even no. =", num)
//     }
// }

//Qno.2 Create a game where you start with any random game number. 
//Ask the user to keep guessing the game number until the user
//entera correct value.

// let gameNum = 25;

// let userNum = prompt("Guess the game number : ")

// while(userNum !== gameNum) {
//     userNum=prompt("You entered worng number. Guess again: ")

// }
// console.log("congratualtion, you entered the right number")

//STRINGS
// let str="nikhil"
// let str2='nikhil'
// console.log(str[1])

// let obj = {
//     item: "pen",
//     price: 10,
// }

// let output = `the cost of ${obj.item} is ${obj.price} rupess`;
// console.log(output)

// console.log("the cost of", obj.item, "is", obj.price)

// //Template Literals
// let specialString = 'This is a template literal'
// console.log(typeof specialString)

//Qno.1 prompt the user to enter their full name. generatea username for them based on the input.
//start username with @,following by their full name and ending with the fullname length
let fullName =prompt("enter your fullname without space")
let username ="@" + fullName + fullName.length;
console.log(username)

