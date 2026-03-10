// Step 1: Import core modules
const http = require('http');
const fs = require('fs');

// Step 2: Create the Server
const server = http.createServer((req, res) => {
    const url = req.url;

    // Setting response header
    res.setHeader('Content-Type', 'text/html');

    // Route: Home
    if (url === '/') {
        res.write('<html><body><h1>Welcome to Node.js</h1>');
        res.write('<p>Creating a file... check your folder!</p></body></html>');
        
        // Method: fs.writeFile(filename, content, callback)
        fs.writeFile('message.txt', 'Hello from Node.js!', (err) => {
            if (err) throw err;
            console.log('File has been created!');
        });

        return res.end();
    }

    // Route: Read File
    if (url === '/read') {
        // Method: fs.readFile(path, encoding, callback)
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                res.write('<h1>Error reading file</h1>');
            } else {
                res.write(`<h1>File Content:</h1><p>${data}</p>`);
            }
            return res.end();
        });
        return;
    }

    // Route: 404
    res.write('<h1>404: Page Not Found</h1>');
    res.end();
});

// Step 3: Set the Port
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});