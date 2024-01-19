const fs = require('fs');

//for crating folder
// fs.mkdirSync('thapa')

//create a file add data
fs.writeFileSync('thapa/bio.txt','My name is lavish');

//append data
fs.appendFileSync('thapa/bio.txt',' /ni live in indore');

//read data without getting buffer data
var data = fs.readFileSync('thapa/bio.txt','utf8')
console.log(data);

//rename
fs.renameSync('thapa/bio.txt','thapa/mybio.txt');

//for deleting the file 
fs.unlinkSync('thapa/mybio.txt');

//for deleting folder  
fs.rmdirSync('thapa')