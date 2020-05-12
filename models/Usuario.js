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
                type: DataTypes.STRING(256),
                allowNull: false
            },
            foto:{
                type: DataTypes.STRING(500),
                allowNull: true
            },
            descricao:{
                type: DataTypes.STRING(500),
                allowNull: true
            },
            cidade:{
                type: DataTypes.STRING(200),
                allowNull: true
            },
            estado:{
                type: DataTypes.STRING(2),
                allowNull: true
            },
            dataDeNascimento:{
                type: DataTypes.DATE,
                allowNull: true
            },
            tipoAp:{
                type: DataTypes.TINYINT(1),
                allowNull: true
            },
            apelido:{
                type: DataTypes.STRING(20),
                allowNull: true
            },
            genero:{
                type: DataTypes.TINYINT(1),
                allowNull: true
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
            tableName: "usuario",
            timestamps: false
        }

    );

    return usuario;
}

module.exports = Usuario;