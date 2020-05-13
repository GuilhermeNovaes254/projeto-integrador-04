const Estado = (sequelize, DataTypes) => {
    var estado = sequelize.define(
        'Estado',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            sigla: {
                type: DataTypes.STRING(2),
                allowNull: false
            }
        },{
            tableName: "estado",
            timestamps: false
        }

    );
    estado.associate = (models) => {
        estado.hasMany(models.Cidade, {foreignKey: 'estado_id', as:'cidades'})
    }
    return estado;
}

module.exports = Estado;