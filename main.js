let months = ["January", "June", "July"]

let joyarray = []
for (x = 0; x < 700;x++){
    joyarray.push("joy")
}

let sevenarray = []
for (x = 0; x < 500 ;x++){
    sevenarray.push(7)
}

// let randarray = []
// for (x = 0; x < 5000; x++){
//     randarray.push(Math.random() * (100))
// }

let secondrandarray = []
for (x = 0; x < 300; x++){
    secondrandarray.push(Math.random() * (40))
}

let multiplesarray = []
for (x = 20 ;x <= 800; x += 4){
    multiplesarray.push(x)
}

let evennumbers = []
for (x = 100;x > 8;x -= 2){
    evennumbers.push(x)
}

let colorsStr = "red,orange,yellow,green,blue,indigo,violet"
let colorsplit = colorsStr.split(",")

let citiesStr = "Edmonton;Calgary;Vancouver;Saskatoon;Winnipeg"
let citysplit = citiesStr.split(";")


let namse = []
let loop = true
while (loop){
    let answer = prompt("enter a name")
    namse.push(answer)
    if (answer === "done"){
        loop = false
    }
}
// function check(){
//     let addname = prompt("please add a name")
//     namse.push(addname)
//     console.log(namse)
//     if (addname !== "done"){
//         check()
//     }
// }
// check()


// Traverse ARrays Practice
let results = []
let yes = 0 
let no = 0
let maybe = 0
for (x = 0;x < results.length; x++){
    if (results[x] === "Yes"){
        yes++
    }   else if (results[x] === "No"){
        no++
    }   else if (results[x] === "Maybe"){
        maybe++
    }
}

let ages = []
let younger = 0
let older = 0
for (x = 0; x < ages.length;x++){
    if (ages[x] < 18 ){
        younger++
    }   else {
        older++
    }
}

let prices = []
let under20 = 0
let over20 = 0
let over50 = 0
for (x = 0;x < prices.length;x++){
    if (prices[x] < 20){
        under20++
    }   else if (prices[x] >= 20){
                over20++
    }   else if (prices[x] >= 50){
        over50++
    }
    prices[x]+=2
    prices[x] *= 1.05
    prices[x] *= 0.80
}
