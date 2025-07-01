class user{
    constructor(email,password){
        this.email = email
        this._password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
    return `${this._password}max`
    }
    set password(value){
        this._password = value
 }
}

const chai = new user("chai@connect.com","123")
console.log(chai.password);
