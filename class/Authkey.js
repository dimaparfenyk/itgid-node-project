const randomstring = require("randomstring");
const { authkey } = require("../db");

module.exports = class Authkey {
  static async createAuthKey(userid) {
    const authString = randomstring.generate(44);
    return await authkey.create({
      userid,
      authkey: authString,
    });
  }

  static async checkCookie(cookie) {
    return await authkey.findOne({
      where: {
        authkey: cookie,
      },
    });
  }
};
