const axios = require("axios");

class TrendingFetch {
  static getBalance(token) {
    return axios
      .get("https://trending.bid/advertiserapi/payment/getinfo", {
        headers: {
          Cookie: `PHPSESSID=${token}`,
        },
      })
      .then((data) => data.data.data.balance)
      .catch((data) => data.response.data);
  }
}

module.exports = TrendingFetch;
