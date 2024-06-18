const crypto = require("crypto");
const { user } = require("../db");

module.exports = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;

    this.salt = "@HG17`?.-=0ipVm,N!^;:2";
  }

  async findUser() {
    return await user.findOne({
      where: {
        email: this.email,
      },
    });
  }

  async createUser() {
    return await user.create({
      email: this.email,
      password: crypto
        .createHash("sha256")
        .update(this.salt + this.password)
        .digest("base64"),
    });
  }

  async authUser() {
    return await user.findOne({
      where: {
        email: this.email,
        password: crypto
          .createHash("sha256")
          .update(this.salt + this.password)
          .digest("base64"),
      },
    });
  }
};
