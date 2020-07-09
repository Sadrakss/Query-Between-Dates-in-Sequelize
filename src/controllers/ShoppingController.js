const { Op } = require('sequelize')
const Shopping = require('../models/Shopping');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const shopping = await Shopping.findAll({
            attributes: ['id'],
            where: {
                created_at: {
                    [Op.between]: ['2018-02-01','2018-02-11']
                }
            },
              include: [
                  { association: 'users', attributes: ['name'] },
                { association: 'products', attributes: ['name'] }
             ]
        });

        return res.json(shopping);
    },

    async store(req, res) {
        const { user_id, product_id } = req.params;
        const { quantity } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            res.status(400).json({ error: 'User not found' });
        }

        const shopping = await Shopping.create({
            user_id,
            product_id, quantity
        });
        return res.json(shopping);

    },
}