const configRedis = require("redis");
const { REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } = require("./config");

const redisClient = configRedis.createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: "redis",
    port: 6379,
  },
});

redisClient.on("connect", function () {
  console.info("Redis Database connected.".grey);
});
redisClient.on("error", (err) => console.error("Redis Client Error!".red, err));

module.exports = redisClient;
