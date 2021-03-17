const db = require("../../database/database");

const operationControllers = {
  getInfoFromDatabase: (req, res) => {
    db.query("SELECT * FROM new_table", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    });
  },

  sendInfoToDatabase: (req, res) => {
    const {
      operationAmount,
      operationDescription,
      operation,
      today
    } = req.body;

    db.query(
      "INSERT INTO new_table (date, amount, description, type) VALUES (?,?,?,?)",
      [today, operationAmount, operationDescription, operation],
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Values inserted");
        }
      }
    );
    console.log("este es req.body", req.body);
  }
};

module.exports = operationControllers;

const today = new Date(Date.now()).toLocaleDateString();
