class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
        return `${this._password}nick`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const nick = new User("Nikhl@.kdmfk","abc")
console.log(nick.email)