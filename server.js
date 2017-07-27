var express = require('express');
var app = express();

app.use(express.static(__dirname + '\\build\\release'));
app.get('/StartArd', (req, res) => {
    console.log("StartArd");
    res.send(startArd());
});

app.listen(3000);


var startArd = () => {
    var TardServer = require('./build/release/TardServer.js');
    try {
        var ts = new TardServer.TardServer();
        return "Started"
    } catch (ex) {
        return ex
    }
}