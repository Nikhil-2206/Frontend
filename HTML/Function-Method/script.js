console.log("hello")

function myfunction(){
   // console.log("welcome to my function")
}
myfunction();//for call the function

function myfunction2(msg){
    //parameter - > input
  //  console.log("i love my self");
}
myfunction2()

// function -> 2 number, sum

function sum(x,y){
    s = x + y;
    return s;
}

let val = sum(8,7)
//console.log(val)

// sum function
function sum(a,b){
    return a+b
}
//console.log(sum(4,6))

// ARROW FUNCTION

const arrowSum = (a,b) => {
    sum(a+b)
};
//console.log(sum(4,6))

// count vowels in string
function countVowels(str){
    //"Apna collage" , count = 5
    let count = 0;
    for(const char of str){
        if(char ==="a" || char ==="e"||char ==="i"||char ==="o"||char ==="u"){
            count ++;
        }
    }
  //  console.log(count);
}

//same using arror function
const countVow = (str) =>{
    let count = 0;
    for(const char of str){
        if(char ==="a" || char ==="e"||char ==="i"||char ==="o"||char ==="u"){
            count ++;
        }
    }
  //  console.log(count);
}

//forEach loop
 
let arr = [1,2,3,4,5];

arr.forEach(function printVal(){ //each value at each index // callBack Function
 // console.log(val)
})

//Arrow function

let arr2 = [1,2,3,4,5];

arr.forEach((val) => {
 //   console.log(val)
});

//Return the square of the no. using foreachloop

let num = [1,2,3,4,5,6,7]

let calcSquare = (num) =>{//second type
 //   console.log(num * num); // num**2
};

num.forEach((num) =>{
 //   console.log(num * num); // num**2
});

// Map method

let nums = [67,52,39];

let newArr = nums.map((val) =>{//create a new Array
    return val;
});

//console.log(newArr)

//filter method
let arr3= [1,2,3,4,5,6,7];

let evenArr = arr3.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr)