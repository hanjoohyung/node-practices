const http = require('http');
const fs = require('fs');

const port = 8080;
const server = http.createServer(function(req, resp) {
   console.log(req.url);
   
   if(req.url == '/') {
        req.url = '/index.html';
   }

   fs.readFile(`${__dirname}/public${req.url}`, function(error, data){ // callback 앞에는 error , 뒤에는 data
        resp.writeHead(200, {
            'Content-Type': 'tet/html'
        });
        resp.end(data);
   });
});

server.listen(port, function(){
    console.log(`http server running on ${[port]}`);
});