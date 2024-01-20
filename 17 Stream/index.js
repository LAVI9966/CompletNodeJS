const http = require('http')
const fs = require('fs')

const server = http.createServer();

server.on('request',(req,res)=>{
    const fs = require('fs')
    // 1 first way 
    // fs.readFile('input.txt',(err,data)=>{
    //     // if(err) return console.error(err);
    //     res.end(data.toString());
    // })
    // //upper wali mthod video puri download karegi fir play karegi
     
    //2 way
    // //now we using stream method
    // const rstream = fs.createReadStream('input.txt');
    
    
    // //data , data ata he isme chunk me
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // });

    // //end , jaha response end ho jayega
    // rstream.on('end',()=>{
    //     res.end();
    // });

    // //error, error ane par
    // rstream.on('error',()=>{
    //     res.end("error no file");
    // })
    
    //3 way (best way best way)
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res,)
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('Server start')
})