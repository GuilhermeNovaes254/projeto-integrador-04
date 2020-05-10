const Dominio = (sequelize, DataTypes) => {
    var dominio = sequelize.define(
        'Dominio',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            nome: {
                type: DataTypes.STRING(80),
                allowNull: true
            }
        },{
            tableName: "dominio",
            timestamps: false
        }

    );
    dominio.associate = (models) => {
        dominio.hasMany(models.Jogo, {foreignKey: 'dominio_id', as:'jogos'})
    }
    return dominio;
}

module.exports = Dominio;