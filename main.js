const express = require("express");
const app = express();
app.use(express.static("public"));


const server = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + server.address().port);
});