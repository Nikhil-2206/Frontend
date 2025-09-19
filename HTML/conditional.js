//CONDITIONAL STATEMENTS

// let age = 15

// if(age > 18){
//     console.log("you can vote")
// }
// if(age < 18){
//     console.log("you can not right to vote ")
// }

//EX
// let num =10
// if(num%2 ===0){
//     console.log("EVEN")
// }else{
//     console.log("ODD")
// }

//EX
// let mode = "silver"
// let color;

// if(mode === "dark"){
//     color = "black"
// }else if (mode === "blue"){
//     color = "blue";
// } else if (mode === "pink"){
//     color = "pink"
// }else {
//     color = "white"
// }

// console.log(color)

// if(mode === "dark") console.log(mode);


//TERNARY OPERATOR
// let age = 25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result)

//Practice
//Q01. Get user to input a number using prompt("Enter a number")
//check if the number is multiple of 5 or not

// let num = prompt("enter a number:")
// if(num % 5 ===0){
//     console.log(num, " is multiple of 5" )
// }else {
//     console.log(num, " is not multiple of 5")
// }

/*Qno.2 write a code which can give grade to students according to their scores:
90 - 100,A
70 - 89,B
60 - 69,C
50 - 59,D
0  - 49,F*/
let score = prompt("enter your score (0 - 100)");
let grade;

if(score >= 90 && score <= 100){
    grade = "A"
} else if(score >= 70 && score <= 89 ){
    grade = "B"
} else if(score >= 60 && score <= 69){
    grade ="C"
} else if(score >= 50 && score <= 59){
    grade = "D"
} else{
    grade= "F"
}

console.log("according to your score, your grade was : ", grade )

