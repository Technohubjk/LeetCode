let myDate = new Date();
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toTimeString())
//console.log(typeof myDate)

let myCreateDate = new Date("2023-01-14")
//console.log(myCreateDate.toLocaleDateString())
//console.log("Shiv Kumar")
let CurrentTime = Date.now();

console.log(Date.now()/1000)
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay())
console.log(newDate.getMonth())
newDate.toLocaleString('default',{
    weekday:"long",
    

})