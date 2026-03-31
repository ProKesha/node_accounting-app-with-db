'use strict';

const { User } = require('./User.model');
const { Expense } = require('./Expense.model');
const { Category } = require('./Category.model');

User.hasMany(Expense, {
  foreignKey: 'userId',
  as: 'expenses',
  onDelete: 'CASCADE',
});

Expense.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = {
  models: {
    User,
    Expense,
    Category,
  },
};
