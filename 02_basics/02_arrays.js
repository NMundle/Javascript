const marvel_heros = ["thor","iron-man","spiderman"]
const dc_heros = ["superman","flash","batman"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//Spread Method

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);

console.log(Array.isArray("MAX"));
console.log(Array.from("MAX"));
// convert string into array


//OF
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));

