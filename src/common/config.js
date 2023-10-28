require("dotenv").config();
require("colors");

const PORT = process.env.PORT;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = Number(process.env.REDIS_PORT);

module.exports = { PORT, REDIS_PASSWORD, REDIS_HOST, REDIS_PORT };
