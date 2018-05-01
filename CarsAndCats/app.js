// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
        // see what URL the clients are requesting:
        console.log('client request URL: ', request.url);
        // this is how we do routing:
        if(request.url === '/cars.html') {
                fs.readFile('Views/cars.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
                });
        }
        else if(request.url === '/Images/whip1.jpg'){
                fs.readFile('./Images/whip1.jpg', function(errors, contents){
                        response.writeHead(200, {'Content-type': 'image/jpg'});
                        response.write(contents);
                        response.end();
                })
        }
        else if(request.url === '/Images/whip2.jpg'){
                fs.readFile('./Images/whip2.jpg', function(errors, contents){
                        response.writeHead(200, {'Content-type': 'image/jpg'});
                        response.write(contents);
                        response.end();
                })
        }
        else if(request.url === '/Images/whip3.jpg'){
                fs.readFile('./Images/whip3.jpg', function(errors, contents){
                        response.writeHead(200, {'Content-type': 'image/jpg'});
                        response.write(contents);
                        response.end();
                })
        }
        else if (request.url === "/cats.html") {
                fs.readFile('Views/cats.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-type': 'text/html'});
                response.write(contents); 
                response.end();
                });
        }
        else if(request.url === '/Images/cat1.jpg'){
                fs.readFile('./Images/cat1.jpg', function(errors, contents){
                        response.writeHead(200, {'Content-type': 'image/jpg'});
                        response.write(contents);
                        response.end();
                })
        }
        else if(request.url === '/Images/cat2.jpg'){
                fs.readFile('./Images/cat2.jpg', function(errors, contents){
                        response.writeHead(200, {'Content-type': 'image/jpg'});
                        response.write(contents);
                        response.end();
                })
        }
        else if(request.url === '/Images/thugcat.jpg'){
                fs.readFile('./Images/thugcat.jpg', function(errors, contents){
                        response.writeHead(200, {'Content-type': 'image/jpg'});
                        response.write(contents);
                        response.end();
                })
        }
        else if(request.url === '/cars/new.html'){
                fs.readFile('Views/new.html', 'utf8', function(errors, contents){
                response.writeHead(200, {'Content-type': 'text/html'});
                response.write(contents);
                response.end();
                });
        }
        // request didn't match anything:
        else {
                response.end('File not found!!!');
        }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
