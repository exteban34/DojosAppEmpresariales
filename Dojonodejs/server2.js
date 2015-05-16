var http = require("http");
var path = require("path");
var fs = require("fs");

var server = http.createServer(function(req,res){
    var contentType = "text/html";
    var resource = req.url;
    var ext = path.extname(resource);

    if(resource === "/"){
        resource = "/index.html";    
    }

    resource = "."+resource;

    switch(ext){
        case ".css":
            contentType = "text/css";
            break;
    
        case ".js":
            contentType = "text/javascript";
            break;
    }

    fs.exists(resource, function(exist){
        if(exist){
            fs.readFile(resource,function(err,data){
                if(err){
                    res.writeHead(500);
                    res.end("Internal Error");
                }else{    
                    res.writeHead(200,{"content-type":contentType});
                    res.end(data);
                }                

            });
        }else{
            res.writeHead(404);
            res.end("Not found");            
        }
    });

});

server.listen(8888);
console.log("Listening...");