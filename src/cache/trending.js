const redisClient = require("../common/configRedis");

const TOKEN_NAME = "sessionToken";

class TrendingCathe {
  static setToken(token) {
    return redisClient.set(TOKEN_NAME, token);
  }

  static getToken() {
    return redisClient.get(TOKEN_NAME);
  }
}

module.exports = TrendingCathe;
