const Favorito = (sequelize, DataTypes) => {
    var favorito = sequelize.define(
        'Favorito',
        {
            usuario_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Usuario", 
                key: "id"
                }
            },
            jogo_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Jogo", 
                key: "id"
                }
            }
        },{
            tableName: "favorito",
            timestamps: false
        }

    );
    favorito.associate = (models) => {
        favorito.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as:'usuario'})
        favorito.belongsTo(models.Jogo, {foreignKey: 'jogo_id', as:'jogo'})
    }
    return favorito;
}

module.exports = Favorito;