const Usuario = (sequelize, DataTypes) => {
    var usuario = sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false,
                unique: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(200),
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING(250),
                allowNull: false
            },
            foto:{
                type: DataTypes.STRING(500)
            },
            descricao:{
                type: DataTypes.STRING(500)
            },
            cidade:{
                type: DataTypes.STRING(200)
            },
            estado:{
                type: DataTypes.STRING(2)
            },
            dataDeNascimento:{
                type: DataTypes.DATE
            },
            tipoAp:{
                type: DataTypes.TINYINT(1)
            },
            apelido:{
                type: DataTypes.STRING(100)
            },
            genero:{
                type: DataTypes.TINYINT(1)
            },
            privilegio_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Privilegio", 
                key: "id"
                }
            }
        },{
            tableName: "usuario",
            timestamps: false
        }

    );
    usuario.associate = (models) => {
        usuario.belongsTo(models.Privilegio, {foreignKey: 'privilegio_id', as:'privilegio'})
    }
    return usuario;
}

module.exports = Usuario;