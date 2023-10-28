const CustomError = require("./customError");

module.exports = (err, req, res, next) => {
  if (err instanceof CustomError)
    return res.status(err.status).send({ message: err.message });

  res.status(500).send({ message: "Unhandled rejection" });
};
