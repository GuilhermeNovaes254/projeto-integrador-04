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
                allowNull: false
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
            },
            cidade_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Cidade", 
                key: "id"
                }
            },
            cidade_estado_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Cidade", 
                key: "estado_id"
                }
            }
        },{
            tableName: "usuario",
            timestamps: false
        }

    );



    usuario.associate = (models) => {
        usuario.belongsTo(models.Cidade, {foreignKey: 'cidade_id', as:'cidade'})
        usuario.belongsToMany(models.Jogo, {through: 'Favorito', foreignKey: 'usuario_id', as: 'favoritos_jogos'})
        usuario.belongsToMany(models.Jogo, {through: 'Colecao', foreignKey: 'usuario_id', as: 'colecoes_jogos'})
        usuario.belongsToMany(models.Jogo, {through: 'Joguei', foreignKey: 'usuario_id', as: 'joguei_jogos'})
        usuario.belongsToMany(models.Jogo, {through: 'Avaliacao', foreignKey: 'usuario_id', as: 'avaliacoes_jogos'})
        usuario.belongsToMany(models.Jogo, {through: 'Comentario', foreignKey: 'usuario_id', as: 'comentarios_jogos'})
    }
    return usuario;
}

module.exports = Usuario;