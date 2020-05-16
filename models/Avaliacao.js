const Avaliacao = (sequelize, DataTypes) => {
    var avaliacao = sequelize.define(
        'Avaliacao',
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
            },
            avaliacao: {
              type: Sequelize.DECIMAL,
              default: 0
            }
        },{
            tableName: "avaliacao",
            timestamps: false
        }

    );
    avaliacao.associate = (models) => {
        avaliacao.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as:'usuario'})
        avaliacao.belongsTo(models.Jogo, {foreignKey: 'jogo_id', as:'jogo'})
    }
    return avaliacao;
}

module.exports = Avaliacao;