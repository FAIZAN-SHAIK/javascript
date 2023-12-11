function isEvenOrOdd(num){
    if(num%2 === 0){
        return true;
    }
    return false;
    
}

// var a = Number(prompt("enter the nuimber : "))

// var ans = isEvenOrOdd(a);

// console.log(ans);


//take a string and return 1st charaxter

function  firstChar(name){
    return name.charAt(0);
}

var name = "faizan";
console.log(firstChar(name))