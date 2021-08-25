const User = require('./User');
const Gallery = require('./');
const Painting = require('./');

Gallery.hasMany(model, {
  foreignKey: '_id',
  onDelete: 'CASCADE'
});

Painting.belongsTo(model, {
  foreignKey: '_id',
});

module.exports = { User };
