// Import a module
const http = require('http')
//import url module
//const url = require('url')
const qs = require('querystring')
const handle =require('./handle')
// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'



const server = http.createServer(handle.serverHandle);
server.listen(8080)

//http.server
