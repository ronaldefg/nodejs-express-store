const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const allUsers = await models.User.findAll();
    return allUsers;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ['customer']
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const userUpdated = await user.update(changes)
    return userUpdated;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
