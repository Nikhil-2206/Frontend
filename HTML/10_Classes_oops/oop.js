//Object literal
const user ={
    username: "Nick",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
 // console.log(user.getUserDetails());
// console.log(this)


// -->>Constructor FUNCTION
// const promiseOne = new Promise()
// const data = new Data()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    //methode
    this.geeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    //return this //by defult 
}

const userOne = new User("Nick", 18, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);
//call constructor function
console.log(userOne.constructor)