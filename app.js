var express = require("express");
app = express();

app.use( express.logger("dev") );
app.use( express.static( __dirname + "/public" ));
app.use( express.static( __dirname + "/components" ));

app.listen(8081);

