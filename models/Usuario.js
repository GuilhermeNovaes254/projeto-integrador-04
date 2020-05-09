const Usuario = (sequelize, DataTypes) => {
    var usuario = sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            tableName: "usuarios",
            timestamps: false
        }

    );
    usuario.associate = (models) => {
        usuario.hasMany(models.Comentario, {foreignKey: 'usuarios_id', as:'comentarios'})
        usuario.hasMany(models.Post, {foreignKey: 'usuarios_id', as:'posts'})
    }
    return usuario;
}

module.exports = Usuario;