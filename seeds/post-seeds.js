const sequelize = require("../config/connection");
const { Post } = require("../models");

const postData = [
  {
    title: "Why MVC is so important",
    post_contents:
      "MVC allows developers to maintain a true seperation of concerns devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
  },
  {
    title: " Sequelize ORM (Object-Relational-Mapping)",
    post_contents:
      "Sequelize ORM allows developers to connect a Node.js application and assist with simpler database synchronization. Seeuelize can make querying and manipulation of data easier to maintain.",
  },
  {
    title: "Introduction to npm",
    post_contents:
      "npm or Node Packet Manager, is an open source software library that allows developers to share software.",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
