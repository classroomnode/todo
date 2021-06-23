const express = require("express");
const todoRouter = require("./route/route.todo");
const cors = require("cors");
const app = express();
const swaggerUI = require("swagger-ui-express");

const path = require("path");
const YAML = require("yamljs");
const swaggerDocument = YAML.load(path.join(__dirname, "/swagger.yaml"));
const swaggerJsDoc = require("swagger-jsdoc");
app.use(express.json());
app.use(cors());
app.use("/api/", todoRouter);
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com"
      }
    },

    servers: [
      {
        url: "http://localhost:4001",
        description: "My API Documentation"
      }
    ]
  },
  apis: ["./route/*.js"]
};
const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(8080, () => {
  console.log("Server is listening on port 8080......");
});

module.exports = app;
