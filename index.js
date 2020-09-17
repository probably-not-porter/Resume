console.log("\n==================================");
console.log("|           Portfolio            |");
console.log("==================================\n");

const express = require('express');
const app = express();
var path = require('path');
var favicon = require('serve-favicon');

app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));

app.get('/', function(req, res) {
    res.render("index",{
    })
});
app.get('/v1', function(req, res) {
    res.render("v1",{
    })
});
app.use(express.static(__dirname + '/public'));


// LISTEN
app.listen(process.env.PORT || 3000, function(){
    console.log("Server: Running on port %d in %s mode", this.address().port, app.settings.env);
});