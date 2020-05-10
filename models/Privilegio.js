const Privilegio = (sequelize, DataTypes) => {
    var privilegio = sequelize.define(
        'Privilegio',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false,
                unique: true
            },
            cargo: {
                type: DataTypes.TINYINT(1),
                allowNull: false,
                default:0
            },
            aprovado: {
                type: DataTypes.TINYINT(1),
                allowNull: false,
                default:0
            }
        },{
            tableName: "privilegio",
            timestamps: false
        }

    );
    privilegio.associate = (models) => {
        privilegio.hasMany(models.Usuario, {foreignKey: 'privilegio_id', as:'usuarios'})
    }
    return privilegio;
}

module.exports = Privilegio;