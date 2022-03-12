const sequelize = require("../config/connection");
const { Post } = require("../models");

const postData = [
  {
    title: "Why MVC is so important",
    post_contents:
      "MVC allows developers to maintain a true seperation of concerns devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
  },
  {
    title: "Test Post 2",
    post_contents: "This is the test post 2 blog contents.",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
