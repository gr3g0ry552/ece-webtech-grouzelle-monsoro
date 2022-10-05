// ./handles.js
// Necessary imports
const url = require('url')
const qs = require('querystring')

module.exports = {
  serverHandle: function (req, res) {
    
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)
  const content = require("./content/about.json")
  //const content = require("./content/articles")

  res.writeHead(200, {'Content-Type': 'text/html'});
  
  if (path === '/hello' && 'name' in params) {
    if(params['name']=='yan'){
        //res.write( require("./content/about.json"))
        
        res.write(content)
    }else{
    res.write('Hello ' + params['name'])
    }
  } else {
    res.write('code 404')
  }
  res.end();
  }
}