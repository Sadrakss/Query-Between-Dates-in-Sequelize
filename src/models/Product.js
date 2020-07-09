const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            category: DataTypes.STRING,
        },
            {
                sequelize,
            })
    }
}

module.exports = Product;