var http = require('http');
var server = http.createServer(function (request, response) 
{
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Username (secret): " +process.env.username +"<br/>");
  response.write("Password (secret): " +process.env.password);
  response.end();
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Application listening on ${port}`));
