var arr = ["hello","bye"]
var arr2 = []

for(var i = 0;i<arr.length;i++){
    console.log(arr[i])
    arr2.push(arr[i].toUpperCase())
}
console.log(arr2)

console.log("1".toUpperCase())