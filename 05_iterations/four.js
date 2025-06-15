const myObject = {
    js: "javaScript",
    cpp:"C++",
    py:"python",
    swift:"swift by apple"
}

for(const key in myObject){
    // console.log(`${key} is the shortcut of ${myObject[key]}`);
    
}

 const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
//Not give the result for Map

//for objects we use forIn loop
// for arrays we use  forOf loop