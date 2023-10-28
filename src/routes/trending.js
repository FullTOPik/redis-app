const { Router } = require("express");
const routes = new Router();

const TradingController = require("../controllers/trending");

routes.post("/auth", TradingController.setToken);
routes.get("/balance", TradingController.getBalance);

module.exports = routes;
