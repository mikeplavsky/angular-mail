var express = require("express");
app = express();

app.use( express.logger("dev") );
app.use( express.static( __dirname + "/public" ));

app.listen(80);
