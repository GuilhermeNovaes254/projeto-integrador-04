const Mecanica = (sequelize, DataTypes) => {
    var mecanica = sequelize.define(
        'Mecanica',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false,
                unique: true
            },
            nome: {
                type: DataTypes.STRING(80),
                allowNull: true
            }
        },{
            tableName: "mecanica",
            timestamps: false
        }

    );
    mecanica.associate = (models) => {
        mecanica.hasMany(models.Jogo, {foreignKey: 'mecanica_id', as:'jogos'})
    }
    return mecanica;
}

module.exports = Mecanica;