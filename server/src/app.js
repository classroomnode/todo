const express = require("express");
const todoRouter = require("./route/route.todo");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());
app.use("/api/", todoRouter);

app.listen(8080, () => {
  console.log("Server is listening on port 8080......");
});

module.exports = app;
