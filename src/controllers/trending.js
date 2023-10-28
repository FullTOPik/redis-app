const TrendingService = require("../services/trending");

const trendingController = {};

trendingController.setToken = async (req, res, next) => {
  try {
    const { PHPSESSID } = req.body;

    const result = await TrendingService.setToken(PHPSESSID);

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

trendingController.getBalance = async (req, res, next) => {
  try {
    const balance = await TrendingService.getBalance();

    res.status(200).send({ balance, status: "true" });
  } catch (err) {
    next(err);
  }
};

module.exports = trendingController;
