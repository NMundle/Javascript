//promise 1//

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000)

})
promiseOne.then(function(){
    console.log("promise is consumed");
    
})

//promise 2

new Promise(function(resolve,reject){
    setTimeout(function(){
          console.log("async 2 is complete");
          resolve()

    },1000)
  
    
}).then(function(){
    console.log("asynxc 2 is consumed");
    
})

//promise 3

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"max",email:"max@example.com"})
  },1000)
})

promiseThree.then(function(user){
console.log(user)

})

//promise 4

const promiseFour = new Promise(function(resolve,reject){
let error = true
if(!error){
   resolve({username:"max",password:"123"})
    
}else{
    reject("ERROR:something went wrong")
}
},1000)

promiseFour.then((user)=>{
console.log(user)
return user.username

}).then((username)=>{
console.log(username)

}).catch(function(error){
console.log(error)

}).finally(()=>console.log("this promise is either resolved or rejected"))


//promise 5

const promiseFive = new Promise(function(resolve,reject){
setTimeout(function(){
let error = true
if(!error){
    resolve({username:"javascript",password:"123"})
}else{
    reject("ERROR:something went wrong ")
}
},1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
        
    }catch(error){
        console.log(error)
        
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
    
}).catch((error)=>console.log(error))
