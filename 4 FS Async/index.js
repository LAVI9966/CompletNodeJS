const fs = require('fs');

//callback make the program asynchronose
fs.writeFile('read.txt','today is owsm day :) ',
(err) =>{
    console.log('File is created');
    console.log(err);
});


//we pass them a function as an argument a callback
// that gets called when that task is completes
//the callback has an argument that tells you whether 
//the operation completed successfully
//now we need too say what to do when f.writefile
//has completed (even if its nothing ),and start
//checking for error  


//append file 
fs.appendFile('read.txt','new data added',(err)=>{
    console.log('apped data complete')
})


//if the function is returning anything then
//it will be come in second parameter of callback functin

fs.readFile('read.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
    console.log(data);
    }
})