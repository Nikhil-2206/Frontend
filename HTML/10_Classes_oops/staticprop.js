class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const Nikhil = new User("Nikhil")
// console.log(Nikhil.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", " I@phone.com")
console.log(iphone.createId())