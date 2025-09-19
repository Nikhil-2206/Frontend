// console.log("Hello")
// alert(",.,.,.,.")
// let heading = document.getElementById("heading")//h1
// console.dir(heading);

// let headings = document.getElementsByClassName("heading--class")
// console.dir(headings)
// console.log(headings)

// let elements = document.querySelector("p")
// console.dir(elements)

// let div = document.querySelector("div")
// console.dir(div) 

// let h2 = document.querySelector("h2")

// console.dir(h2.innerText)

// h2.innerText = h2.innerText + " from apna collage"

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs){
//     div.innerText = `new uniqe value ${idx}`;
//     idx++;
// }
// // divs[0].innerText ="new unique  value 1";
// divs[1].innerText ="new unique  value 2";
// divs[2].innerText ="new unique  value 3";

// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)

// let  name=  div.getAttribute("name")
// console.log(name)

// let para = document.querySelector("para")
// console.log(para)


// let newBtn = document.createElement("button")
// newBtn.innerText = "Click me!"
// console.log(newBtn)

// let div = document.querySelector("div")
// div.prepend(newBtn)
//qno.1
// let newBtn = document.createElement("Button");
// newBtn.innerText = "Click Me!"

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn)

// //qno.2
// let para = document.querySelector("p")
 
// let btn1 = document.querySelector("#btn1")

// btn1.onclick = ()=>{
//     console.log("btn1 was clicked")
//     let a =25
//     a++
//     console.log(a);
// }
let modeBtn = document.querySelector("#mode")
let currMode ="light";//dark


modeBtn.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode="dark"
        document.querySelector("body").style.backgroundColor ="black";
    }else{
        currMode="light"
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currMode)
})
