console.log("\n==================================");
console.log("|           Portfolio            |");
console.log("==================================\n");

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/v1', function(req, res) {
    res.render("v1",{
    })
});
app.get('/v2', function(req, res) {
    res.render("v2",{
    })
});
app.use(express.static(__dirname + '/public'));


// LISTEN
app.listen(process.env.PORT || 9900, function(){
    console.log("Server: Running on port %d in %s mode", this.address().port, app.settings.env);
});