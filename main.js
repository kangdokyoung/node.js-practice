var http = require('http');
var fs = require('fs');
let url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    let queryData = url.parse(_url, true).query;
    let title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', (err, discription) => {
      let template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      <ol>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>${discription}</p>
    </body>
    </html>
    `;
    response.end(template);
    })    
});
app.listen(3000);