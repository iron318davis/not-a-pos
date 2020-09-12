const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const db = require("./models");
const routes = require("./routes");

const mysql = require("mysql");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  console.log("Static Assets are being served")
}

app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.get('*', function (req, res) {
//   console.log("server.js line 40")
//   const index = path.join(__dirname, 'build', 'index.html');
//   res.sendFile(index);
//   console.log("server.js line 43")
// });

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT);
      });
    });

// db.sequelize.sync({ force: true }).then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });
