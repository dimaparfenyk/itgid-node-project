const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("itgid-node-app", "root", "", {
  host: "dimaparfenyk.github.io/itgid-node-project/",
  dialect: "mysql",
  logging: false,
});

const User = require("./User")(sequelize);
const Authkey = require("./AuthKey")(sequelize);

module.exports = {
  sequelize,
  user: User,
  authkey: Authkey,
};
