//if

const isUserLoggedIn = true
const temp = 40

if (temp === 40){
    console.log(`temp is less than 50`);
    
}else{
    console.log(`temp is greater than 50 `)
}
const score = 200
if(score > 100){
    let power = "fly"
    console.log(`user power ${power}`);
    
}
const balance = 1000

if(balance < 500){
    console.log(`less than 500`);
    
}
else if(balance<750){
    console.log(`less than 750`);
    
}
else if(balance < 900){
    console.log(`less than 900`);
    
}
else{
    console.log(`less than 1200`);
    
}

const UserLoggedIn =  true
const debitCard = false
const loggedInFromGoogle  =  true
const loggedInFromEmail = false

if(UserLoggedIn && debitCard && 2==3){
    console.log("Allow the user");
    
}
if(UserLoggedIn || loggedInFromEmail){
    console.log("user logged in");
    
}
