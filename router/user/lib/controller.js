const { User } = require('../../../models');

const controllers = {};

controllers.register = async (req, res) => {
  try {
    const query = { sEmail: req.body.sEmail };

    const user = await User.findOne(query).lean();
    if (user) return res.status(419).json({ message: 'Email already exist' });

    await User.create(req.body);
    return res.status(200).json({ message: 'user created Successfully' });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = controllers;
