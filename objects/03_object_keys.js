var obj1 = {
    name :"Faizan",
    age :20,
    hobbies :["play","eat","sleep"]
}

console.log(Object.keys(obj1))

for(let key of Object.keys(obj1)){
    console.log(obj1[key])
}