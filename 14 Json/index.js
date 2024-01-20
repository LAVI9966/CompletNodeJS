const fs = require('fs')
const bioData = {
    name : 'vinod',
    age :20,
    channle : {
        youtube:'thapa technical',
        insta:'thapa'
    }
};
console.log(bioData.age)
//there is only two main methods of json 

//object to json 
const jsondata = JSON.stringify(bioData);
console.log(jsondata);

//json to object
const objdata = JSON.parse(jsondata);
console.log(objdata)

//task
//1 convert daata to json
//(already done upper dekho)
//2 add in another file
fs.writeFile('data.json',jsondata,(err)=>{
    console.log('done')
})

//3 readfile
fs.readFile('data.json','utf-8',(err,data)=>{
    console.log(jsondata);
    const normaldata = JSON.parse(data);
    console.log(normaldata);
})
//4 again convert back to obj
//5 console .log
