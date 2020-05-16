const Colecao = (sequelize, DataTypes) => {
    var colecao = sequelize.define(
        'Colecao',
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
            tableName: "colecao",
            timestamps: false
        }

    );
    colecao.associate = (models) => {
        colecao.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as:'usuario'})
        colecao.belongsTo(models.Jogo, {foreignKey: 'jogo_id', as:'jogo'})
    }
    return colecao;
}

module.exports = Colecao;