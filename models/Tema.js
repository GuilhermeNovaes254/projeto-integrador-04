const Tema = (sequelize, DataTypes) => {
    var tema = sequelize.define(
        'Tema',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false,
                unique: true
            },
            nome: {
                type: DataTypes.STRING(200),
                allowNull: true
            }
        },{
            tableName: "tema",
            timestamps: false
        }

    );
    tema.associate = (models) => {
        tema.hasMany(models.Jogo, {foreignKey: 'tema_id', as:'jogos'})
    }
    return tema;
}

module.exports = Tema;