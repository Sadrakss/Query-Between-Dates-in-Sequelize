const Product = require('../models/Product')
module.exports = {
    async index(req, res) {

        const products = await Product.findAll();

        res.json(products);
    },
    async store(req, res) {
        const { name, category } = req.body;

        const products = await Product.create({ name, category });

        return res.json(products);
    },
}