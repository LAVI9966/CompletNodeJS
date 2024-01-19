const fs = require('fs');

const data = fs.readFileSync('read.txt','utf-8');
console.log(data);

//here is the sync method no matter what is belove the 
//sync method first it will executed fully then it will 
//execute the next line , fun whatever

console.log("this is file")//this will execute after function   

console.log('--------------------------------------------')

//async method
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data);
})

console.log("aftef function");//here this will execute first
//because upper function is tkaing time
//so it will execute first
//yee rukta nahi he kisi ke liye
//no matter what jiska kam pahle hoga
//wo execute hoga
