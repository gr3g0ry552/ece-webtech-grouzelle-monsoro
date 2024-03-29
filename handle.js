// ./handles.js
// Necessary imports
const url = require('url')
const qs = require('querystring')
module.exports = {
    serverHandle: function (req, res){
 // Retrieve and print the current path
  //const path = url.parse(req.url).pathname;
  // Retrieve and print the queryParams
  //const queryParams = qs.parse(url.parse(req.url).query);
  //console.log(queryParams);
  //console.log(path);
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)
  const content=require("./content/about.json")

  res.writeHead(200, {'Content-Type': 'text/html'});
  
  if (path === '/hello' && 'name' in params) {
    if(params['name']=='yan'){
        //res.write( require("./content/about.json"))
        res.write('bonjour yan')
        res.write(JSON.stringify(content))
        console.log(content);
    }else{
    res.write('Hello ' + params['name'])
    }
  } else {
    res.write('code 404')
  }
  res.end();

    }}