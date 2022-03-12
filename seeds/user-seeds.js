const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "davistr",
    password: "password123",
  },
  {
    username: "johndoe",
    password: "password123",
  },
  {
    username: "janedoe",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
