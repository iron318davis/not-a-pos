const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const db = require("./models");
const mysql = require("mysql");
// console.log(db.Pin)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  console.log("Line 13 server.js")
}
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
//   connection = mysql.createConnection(process.env.NODE_ENV);
//   app.use(express.static("client/build"));
//   console.log("******STARTED USING JAWSDB*******");
// } 
// else if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build")); 
// } 
else {
  connection = mysql.createConnection({ 
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Secret2020$",
    database: "pos_db"
  });
  console.log("Connected locally");
}

app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get('*', function (req, res) {
  console.log("server.js line 40")
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
  console.log("server.js line 43")
});

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
