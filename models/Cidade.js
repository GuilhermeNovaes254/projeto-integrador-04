const Cidade = (sequelize, DataTypes) => {
    var cidade = sequelize.define(
        'Cidade',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            cidade: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            estado_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Estado", 
                key: "id"
                }
            }
        },{
            tableName: "cidade",
            timestamps: false
        }

    );
    cidade.associate = (models) => {
        cidade.belongsTo(models.Estado, {foreignKey: 'estado_id', as:'estado'})
    }
    return cidade;
}

module.exports = Cidade;