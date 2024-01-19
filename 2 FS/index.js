const fs = require('fs')

//creatig a new file
fs.writeFileSync('file.txt','welcome first file');

//complete overwrite
fs.writeFileSync('file.txt','welcome first file second addintion');

//append new data 
fs.appendFileSync('file.txt',' this is append by append method')

//read

//buffer data , buffer is mainly used to store binary data
//while reading from a file or receiving a packets over the network
//buffer is the node data type
//encrypted data
const data1 = fs.readFileSync('file.txt');
console.log(data1);


data2 = data1.toString();
console.log(data2);


//decrepted data
const data = fs.readFileSync('file.txt','utf8');
console.log(data);


//rename
fs.renameSync('file.txt','readwrite.txt');