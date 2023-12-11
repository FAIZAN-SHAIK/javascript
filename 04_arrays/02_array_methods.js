var myArr = [1,2,3,4,5,"hell","jhfejkg"]

//length
console.log(myArr.length)

//toString()
let a = myArr.toString()
console.log(a)
console.log(typeof a)

//pop and push

myArr.push(3)
console.log(myArr)

console.log(myArr.pop())

//shift() and unshift()

myArr.unshift(1)
console.log(myArr)

console.log(myArr.shift())

//delete

delete myArr[1]
console.log(myArr[1])

myArr.reverse()
console.log(myArr);

myArr.sort()
console.log(myArr);
