//Array
// let marks=[97, 82,75,64, 36]
// // console.log(marks)
// // console.log(marks.length)
// // console.log(marks[0])
// for(let i =0; i< marks.length; i++){
//     console.log(marks[i])
// }

// let cities = ["delhi","pune","mumbai","Hyderbad","Gurgaon"]

// for(let city of cities){
//     console.log(city.toUpperCase())
// }

// let marks = [85,97,44,37,76,60]
// let sum =0;
// for(let i =0; i<marks.length;i++){
//     sum +=marks[i];
// }

// let average =sum /marks.length
// console.log("Average marks: ", average)

let items= [250,645,300,900,50]

// for(let i = 0; i< items.length; i++){
//     let offer = items[i] /10;
//     items[i] -= offer;
// }
// console.log(items)

//using for-of loop
// let i=0
// for(let val of items){
//     let offer = val/10;
//     items[i] = items[i] - offer
//     console.log(`value after offer = ${items[i]}`)
// }

//Qno. 1 create an array to store companies  -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//a. Remove the first company from the Array
//b.remove uber & add ola in the place
//c.add amazon at the end

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

console.log(companies)
// companies.shift();

// companies.splice(2,1,"ola")

companies.push("Amazon")

