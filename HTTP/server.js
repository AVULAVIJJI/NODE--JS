// create one server
const http = require('http')
const server = http.createServer((req,resp)=>{
    resp.end("hello,hi ecrfyugg");
});

server.listen(8000,(err)=>{
      if (err) throw err;
      console.log("server is running")
});