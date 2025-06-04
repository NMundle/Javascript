const name = "max"
const repoCount = 50

// console.log(name+ repoCount+ " value");

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const gameName = new String("max-og")

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStingOne = "  max "
console.log(newStingOne.trim())

const url =  "https://max.com/max%20og"
console.log(url.replace("%20","-"));

