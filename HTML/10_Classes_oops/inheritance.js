class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A NEW course was add by ${this.username}`)
    }
}

const chai = new Teacher ("chai", "chai@teacher.com", "1234")

chai.addCourse()
const masalaChai = new User("masalChai")

masalaChai.logMe()

console.log(chai === Teacher);