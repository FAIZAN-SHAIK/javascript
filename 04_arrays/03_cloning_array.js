var arr1 = [1,2,3]

//using slice()
var arr2 = arr1.slice(0);
console.log(arr2)

//using concat()
arr2 = [].concat(arr1)
console.log(arr2)

//using spread operator
arr2 = [...arr1]
console.log(arr2)

var arr3 = [4,5,6]
var arr4 = [...arr1,...arr2,...arr3]
console.log(arr4)
