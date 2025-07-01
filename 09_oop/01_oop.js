// const user = {
//     username:"max",
//     loginCount:8,
//     isSignedIn:true,

//     getUserDetails:function(){
//         console.log(`username:${this.username}`);
//         console.log(this)
        
        
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function user(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting= function(){
        console.log(`welcome ${this.username}`)
        

   
    }
     return this 
}

const userOne = new user("max",12,true)
const userTwo = new user("don",8,false)

console.log(userOne.constructor)
console.log(userTwo)
