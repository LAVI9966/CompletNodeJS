const http = require('http')
const fs = require('fs')

//create a server
//req have the current request
//res i the responsee

var data = fs.readFileSync('data.txt',(err)=>{})

const server = http.createServer((req,res)=>{
    //response
    res.end(data);
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('listening on server 3000 ')
})

