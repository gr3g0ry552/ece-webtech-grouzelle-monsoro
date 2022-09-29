// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World</p>' +
'    </body>' +
'</html>'

// Import Node url module
const url = require('url')
const qs = require('querystring')

const http = require('http')
const handles = require('./handles')
const server = http.createServer(handles.serverHandle);
server.listen(8080)