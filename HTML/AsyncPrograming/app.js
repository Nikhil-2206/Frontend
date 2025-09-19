// function hello(){ //type 1
//     console.log("hello")
// }
// setTimeout(hello, 2000)//timeout

// setTimeout(() => { //type 2
//     console.log("Hello")
// },4000)//timeout

//CALLBACKS
// function sum(a, b){
//     console.log(a+b);
// }
// function calculator(a , b, sumCallback){
//      sumCallback(a , b);
// }
// //calculator(1, 2, sum)//type 1
// calculator(1,2,(a,b) => {//type 2
//     console.log(a + b)
// });


//nesting
// let age = 19;
// if(age >= 18){
//     if(age >= 60){
//         console.log("senior")
//     }else{
//         console.log("middle")
//     }
// }else{
//     console.log("child")
// }

// function getData(dataId, getNextData){
//     //2s
//     setTimeout(() =>{
//     console.log("data", dataId);
//     if(getNextData){
//         getNextData();
//     }
//  }, 2000);
// }
// //CALLBACK hell
// getData(1 ,() => {
//     console.log("getting data2....")
//     getData(2,()=>{
//         console.log("getting data3....")
//       getData(3,()=>{
//         console.log("getting data4....")
//         getData(4)
//       })
//     })
// })


//PROMISES

// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("I am a promise")
//         //resolve("success")
//         reject("error")
//     })
// }

// let promise = getPromise();
// promise.then(() =>{
//     console.log("promise fulfilled")
// })

// promise.catch((err) =>{
//     console.log("rejected",err)
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     })
// }


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1", dataId);
//             resolve("success");
//         }, 2000);
//     })
// }

// //PROMISE CHAIN
//  getData(1)
//  .then((res) =>{
//     return getData(2)
//     })
//     .then((res)=>{
//         return getData(3)
//     })
//     .then((res)=>{
//         console.log(res)
//     })


// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("feteching data1....")
// let p1= asyncFunc1();
// p1.then((res) =>{
//     console.log("fetching data2....")
//     let p2 = asyncFunc2()
//     p2.then((res) =>{})
// })

// console.log("feteching data1....")
// let p2= asyncFunc2();
// p1.then((res) =>{
//     console.log(res)
// })

//ASYNC-AWAIT
async function hello(){
    console.log("hello")
}

function api(){
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
        console.log("Weather data");
        resolve(200)
       },2000)
    })
}

async function getWeatherData(){//ASYNC-AWAIT
    await api();
}
//this is IIFE function == code is directly executed without calling
(async function getWeatherData(){//ASYNC-AWAIT
    await api();
})()