// const student = {
//     fullNmae : "Nikhil",
//     marks: 94.4,
//     printMarks: function(){
//         console.log("marks = ", this.marks );
//     }
// }

// const employee ={
//     calcTax1() {//function type 1
//         console.log("tax rate is 10%")
//     },
//     calcTax2 : function () {//type 2 
//         console.log("tax rate is 10%")
//     }
// } 

// const karanArjun ={
//     salary: 50000,
    
// }

// karanArjun.__proto__ = employee;

// class ToyotaCar{
//     constructor(brand){
//         console.log("creating new object")
//         this.brand = brand;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop")
//     }

//     // setBrand(brand){
//     //     this.brandName = brand;
//     // }
// }

// let fortuner = new ToyotaCar("fortuner");//constructor

// let lexus = new ToyotaCar("lexus");//constructor

//Inheritance
// class Parent{
//     hello(){
//         console.log("hello")
//     }
// }
// class Child extends Parent {

// }
// let obj = new Child();

//2nd Exm
// class Parson{
//     constructor(){
//         this.species = "homo sapiens"
//     }
//     eat(){
//         console.lod("eat");
//     }
// }

// class Engineer extends Parson{
//     constructor(branch){
//         super();//To invoke parent class constructor
//         this.branch = branch;
//     }
//     work(){
//         console.log("solve problems, build something")
//     }
// }
// let Nikhilobj = new Engineer("chemical eng");

//Qs 1. you are crearing a website for your college. Create a class User with 2 properties, name & email.
//It also has method calleed viewData() that allows user to view website data.

//Qs 2. Create a new class called Admin which inherits from User. add  New method
//called editData to Admin that allows it to edit website data.
// let DATA = "secret information"
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = ",DATA)
//     }
// }

// class Admin extends User {
//     constructor(name, email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }
// let stu1 = new User("nikhil","nikerkojgoi@gamil.com")
// let stu12 = new User("nik","niki@gamil.com")

//Error Handling
let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log(" a + b = ", a + b);
console.log(" a + b = ", a + b);
// console.log(" a + b = ", a + c);//error
try{
    console.log(" a + b = ", a + b);//error
}catch(err){
    console.log(err);
}
console.log(" a + b = ", a + b);
console.log(" a + b = ", a + b);
console.log(" a + b = ", a + b);
console.log(" a + b = ", a + b);

