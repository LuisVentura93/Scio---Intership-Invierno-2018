var calculator = require("./calc");
var http = require("http");
var url = require("url");

console.log("Server up, listen on port 8080");
http.createServer(function(req, res){    
    var q = url.parse(req.url, true).query;
    res.writeHead(200, "{Content-type: 'text/html' }");
    res.end("Suma: " + calculator.Sum(parseInt(q.numeroA), parseInt(q.numeroB)) + 
    "\nResta: " + calculator.Res(parseInt(q.numeroA), parseInt(q.numeroB)) +
    "\nMultiplicacion: " + calculator.Mul(parseInt(q.numeroA), parseInt(q.numeroB)) +
    "\nDivision: " + calculator.Div(parseInt(q.numeroA), parseInt(q.numeroB)) +
    "\nRaiz Cuadrada de a: " + calculator.Sqrt1(parseInt(q.numeroA)) +
    "\nRaiz Cuadrada de b: " + calculator.Sqrt2(parseInt(q.numeroB)));
}).listen(8080);
