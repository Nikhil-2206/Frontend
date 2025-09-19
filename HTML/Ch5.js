//Function & Methods
// function myfunction(){
//     console.log("Welcome to mu code")
//     console.log("How are you")
// }

// myfunction();

// function myfunction(msg){
//     //parameter -> input
//     console.log(msg);
// }

// myfunction("i i i i i i");//arguments

// function sum( a,  b){
//     console.log(a+b)
// }

// sum(3,5);

// function sum( a,  b){
//     s = a+b;
//     return s;
// }

// let val=sum(3,5);
// console.log(val)

//multiplication function
// function mul(a, b){
//     return a*b;
// }
// let val= mul(7,8)
// console.log(val)

//Arrow Funtion
// const arrowSum = (a,b)=>{
//     console.log(a+b)
// }
// arrowSum(99,1)


//FROM RETURN VOWELS
// function countVowels(str){
//     //"ApnaCollage", count = 5
//     let count=0;
//     for(const char of str){
//         if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"  ){
//             count++;
//         }
        
//     }
//     console.log(count)
// }

// countVowels("Nikhil")


//FOREACH EXAMPLE
// let arr= [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// let arr=["pune","delhi","mumbai"];

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(), idx, arr)
// })

//Qs for a given ARRAY of number , print the square of each value the forEach loop.
// let nums=[2,3,4,5,6,7,8]
// nums.forEach((num) =>{
//     console.log(num * num);
// })

//map function

// let nums=[67, 52, 39]

// let newArr = nums.map((val)=>{
//     return val * val;
// })
// console.log(newArr)

//Reduce

// let arr=[2,2,3,4]
// //prent largest number in the array
// const output = arr.reduce((pres,curr)=>{
//     return pres > curr ? prev : curr;
// })
// console.log(output)

// let marks=[97,64,32,49,99,96,86]
// let newarr= marks.filter((val) =>{
//     return val >90
// })
// console.log(newarr)

// let n = prompt("enter a numbe: ")

// let arr=[];
// for(let i=1; i<n;i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res , curr) => {
//     return res + curr;
// });

// console.log(sum)


// let factorial = arr.reduce((res , curr) => {
//     return res * curr;
// });

// console.log(factorial)
