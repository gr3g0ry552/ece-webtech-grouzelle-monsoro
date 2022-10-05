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

const http = require('http')
const handles = require('./handles') // Appel du dossier hadnles.js (importe toutes les fonctions du dossier)
const server = http.createServer(handles.serverHandle); // Import de la fonction serveurHandle
server.listen(8080)