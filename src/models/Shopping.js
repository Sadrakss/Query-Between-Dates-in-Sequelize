const { Model, DataTypes } = require('sequelize');

class Shopping extends Model {
    static init(sequelize) {
        super.init({
            quantity: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products' });
    }
}
module.exports = Shopping;