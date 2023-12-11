function add(a,f,callback){
    console.log(a+f);
    callback(3,4)
}

function Sub(c,d){
    console.log(c-d)
}

add(1,2,Sub)