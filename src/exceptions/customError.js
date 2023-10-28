class CustomError extends Error {
  message;
  status;
  constructor({ message, status }) {
    super(message);

    this.message = message;
    this.status = status;
  }

  static BadRequestException(message) {
    return new CustomError({ message, status: 400 });
  }

  static UnauthorizedException(message) {
    return new CustomError({ message, status: 401 });
  }
}

module.exports = CustomError;
