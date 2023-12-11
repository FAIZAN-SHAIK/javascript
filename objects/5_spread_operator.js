var obj1 = {
    name :"Faizan",
    age :20,
    hobbies :["play","eat","sleep"]
}
var obj2 = {
    name1 :"Faizan",
    age1 :20,
    hobbies1 :["play","eat","sleep"]
}

var newobj = {...obj1,...obj2}
console.log(newobj);

newobj = [..."gdtyqy"]
console.log(newobj)