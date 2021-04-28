/* eslint-disable no-unused-vars */
"use strict";

const express = require("express");
const app = express();
const path = require("path");
var serveStatic = require("serve-static");
app.use("/", serveStatic("build"));
app.use("/apps/todo/", serveStatic("build"));

app.get("/*", (req, res) => {
  res.set("Cache-Control", "public, max-age=0, no-cache, no-store");
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(8080, () => {});
