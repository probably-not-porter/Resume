const express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var jsonFile = require('jsonfile');
var jsonData = jsonFile.readFileSync('content.json');
console.log('--- BUILDING CONTENT TREE FROM JSON ---')
console.log(jsonData);

var ghpages = require('gh-pages');
 
ghpages.publish('views', function(err) {});


const app = express();

app.use(favicon(path.join(__dirname, 'public/img_icons', 'favicon.png')));

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("index",{
        content: jsonData,
    })
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
