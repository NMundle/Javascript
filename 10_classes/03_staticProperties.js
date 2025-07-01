class user{
    constructor(username){
       this.username = username
        
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
    static createId(){
        return "123"
    }
}
const userOne = new user("max")
// console.log(userOne.createId());
console.log(user.createId());


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new teacher("iphone","i@phone.com")
console.log(teacher.createId());
