const sequelize = require("../config/connection");
const { Post } = require("../models");

const postData = [
  {
    title: "Why MVC is so important",
    post_contents:
      "MVC allows developers to maintain a true seperation of concerns devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
    user_id: 2,
  },
  {
    title: " Sequelize ORM (Object-Relational-Mapping)",
    post_contents:
      "Sequelize ORM allows developers to connect a Node.js application and assist with simpler database synchronization. Seeuelize can make querying and manipulation of data easier to maintain.",
    user_id: 1,
  },
  {
    title: "Introduction to npm",
    post_contents:
      "npm or Node Packet Manager, is an open source software library that allows developers to share software.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
