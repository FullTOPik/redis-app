const TrendingCathe = require("../cache/trending");
const TrendingFetch = require("../http/trending");
const CustomError = require("../exceptions/customError");

class TrendingService {
  static async setToken(token) {
    await TrendingCathe.setToken(token);

    return { message: "Data written success!" };
  }
  static async getBalance() {
    const token = await TrendingCathe.getToken();
    const data = await TrendingFetch.getBalance(token);

    if (data?.code === 401)
      throw CustomError.UnauthorizedException(data.message);

    return data;
  }
}

module.exports = TrendingService;
