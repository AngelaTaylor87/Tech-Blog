const sequelize = require('../../config/connection');
const seedPost = require('../');
const seedUser = require('./userData.js');
const seedComment = require('./commentData.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  await seedUser();

  await seedComment();

  process.exit(0);
};

seedAll();