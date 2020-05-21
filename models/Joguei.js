const Joguei = (sequelize, DataTypes) => {
    var joguei = sequelize.define(
        'Joguei',
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
            tableName: "joguei",
            timestamps: false
        }

    );
    joguei.associate = (models) => {
        joguei.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as:'usuario'})
        joguei.belongsTo(models.Jogo, {foreignKey: 'jogo_id', as:'jogo'})
    }
    return joguei;
}

module.exports = Joguei;