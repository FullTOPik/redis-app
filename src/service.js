const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const redisClient = require("./common/configRedis");
const { PORT } = require("./common/config");

const errorHandler = require("./exceptions/errorHandler");
const tradingRoutes = require("./routes/trending");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", tradingRoutes);
app.use(errorHandler);

app.listen(PORT, async (err) => {
  if (err) console.error("Server start error!".red);

  console.info(`Server success started on ${PORT} port.`.grey);
  await redisClient.connect();
});
