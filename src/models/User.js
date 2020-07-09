const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Shopping, { foreignKey: 'user_id', as: 'shopping'});
    }
}
module.exports = User;