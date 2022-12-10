const http = require("http")
const server = http.createServer((req, res)=>{
    if (req.url=== "/") {
        res.write("<h1>Hello World</h1>")
        res.statusCode=200
        res.end        
    }
    else if (req.url === "/test") {
        res.write("<h1>Hello Guest</h1>")
        res.statusCode=200
        res.end  
    } else {
        res.write("<h1>404 end</h1>")
        res.statusCode=200
        res.end 
    }
});

server.listen(4000, ()=>{
console.log("server is listening in port 4000");
})