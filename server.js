
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Version 4",
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000"); 
});
