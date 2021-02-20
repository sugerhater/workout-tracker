const express = require('express');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT ||3000;

var compression = require('compression')

// compress all responses
app.use(compression());
// const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.get('*', function (req, res) {
  res.send('Page not found', 404);
});

app.listen(PORT, function(){
  console.log("app listening on PORT " +PORT)
})

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });
