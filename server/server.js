const express = require("express");
const dotenv = require("dotenv");
const apiOperationRouter = require("./router/api/operation");
const { appPort } = require("./config/app");

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/operation", apiOperationRouter);

const port = appPort;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
