const Category = require('../models/Category');

module.exports = {
  async index(request, response) {
    const categories = await Category.find();

    return response.json(categories);
  },

  async store(request, response) {
    const { name, icon } = request.body;

    const category = await Category.create({
      name,
      icon,
    });

    return response.json(category);
  },
};
