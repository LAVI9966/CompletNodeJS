const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
    const apipath = path.join(__dirname+'../../../web_development_rukna_nahi/API/5.2 JSON/recipe.json');
    const data = fs.readFileSync(apipath,'utf-8');
    const objdata = JSON.parse(data);
    if(req.url == '/'){
        res.end('hey start kare?')
    }else if(req.url == '/about'){
        res.end('About jan ke kya karoge?')
    }else if(req.url =='/userapi'){
        // const send = objdata[0].name;
        res.end(objdata)
    }else{
        //if there is error page the 
        //you must send code also
        res.writeHead(404,{"content-type":'text/html'});
        res.end('<h1>404 error page</h1> ')
    }
})
server.listen(3000,(e)=>{
    console.log('Server start')
})
