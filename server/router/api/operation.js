const express = require("express");

const router = express.Router();

const {
  getInfoFromDatabase,
  sendInfoToDatabase
} = require("../../controllers/api/operationControllers");

router.get("/", getInfoFromDatabase);
router.post("/", sendInfoToDatabase);

module.exports = router;
