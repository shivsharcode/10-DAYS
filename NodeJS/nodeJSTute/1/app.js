const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('index.html', function (error, data) { // Use fs.readFile instead of fs.readFileSync
        if (error) {
            res.writeHead(404);
            res.write("Error: File Not Found");
        } else {
            res.write(data);
        }
        res.end(); // End the response inside the callback
    });
});

server.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong:", error);
    } else {
        console.log("Server is listening on port " + port);
    }
});
