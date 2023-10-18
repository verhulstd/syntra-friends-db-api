import express from "express";
import mysql from "mysql2";

const server = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: "ID396978_syntra.db.webhosting.be",
  user: "ID396978_syntra",
  password: "R2g0QseT0B35R1571EL2",
  database: "ID396978_syntra",
  //   database: "syntra",
  //   host: "localhost",
  //   user: "root",
  //   password: "root",
  //   database: "syntra",
});

server.get("/", function (req, res) {
  res.send("Welcome to your amazing api...");
});
server.get("/friends", function (req, res) {
  connection.query("SELECT * FROM `friends`;", function (error, results) {
    if (!error) {
      res.json(results);
    }
  });
});

server.delete("/friends/:id", function (req, res) {
  const idToDelete = req.params.id;
  connection.query(
    `DELETE FROM friends WHERE id = ${idToDelete};`,
    function (error, results) {
      if (!error) {
        res.json({
          delete: "success",
        });
      }
    }
  );
});

server.listen(1234, function () {
  console.log("Your api-server is running @ localhost:1234 🚀");
});
