const Comentario = (sequelize, DataTypes) => {
    var comentario = sequelize.define(
        'Comentario', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            texto: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            data: {
                type: Sequelize.DATE,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "Usuario",
                    key: "id"
                }
            },
            jogo_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "Jogo",
                    key: "id"
                }
            }
        }, {
            tableName: "comentario",
            timestamps: false
        }

    );
    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })
        comentario.belongsTo(models.Jogo, {
            foreignKey: 'jogo_id',
            as: 'jogo'
        })
    }
    return comentario;
}

module.exports = Comentario;