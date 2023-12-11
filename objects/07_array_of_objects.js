var obj1 = [
    {
        name: "Faizan",
        age: 20,
        hobbies: ["play", "eat", "sleep"]
    },
    {
        name: "japan",
        age: 30,
        hobbies: ["play", "eat", "sleep"]
    },
    {
        name: "kshd",
        age: 40,
        hobbies: ["play", "eat", "sleep"]
    }
]

for(let i of obj1){
    if(i.name === "kshd"){
        console.log(i.hobbies[0])
    }
}
