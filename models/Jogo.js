const Jogo = (sequelize, DataTypes) => {
    var jogo = sequelize.define(
        'Jogo',
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
            ano: {
                type: DataTypes.YEAR(4),
                allowNull: true
            },
            descricao: {
                type: DataTypes.STRING(450),
                allowNull: false
            },
            faixaEtaria:{
                type: DataTypes.TINYINT(2),
                allowNull: false
            },
            duracao:{
                type: DataTypes.TINYINT(3),
                allowNull: true
            },
            downtime:{
                type: DataTypes.TINYINT(1),
                allowNull: true
            },
            tutorial:{
                type: DataTypes.STRING(450),
                allowNull: true
            },
            peso:{
                type: DataTypes.TINYINT(2),
                allowNull: true
            },
            regras:{
                type: DataTypes.STRING(450),
                allowNull: true
            },
            qntMax:{
                type: DataTypes.TINYINT(2),
                allowNull: true
            },
            qntMin:{
                type: DataTypes.TINYINT(2),
                allowNull: true
            },
            notaJogo:{
                type: DataTypes.TINYINT(2),
                allowNull: true
            },
            aprovado:{  
                type: DataTypes.TINYINT(1),
                allowNull: false,
                default:0
            },
            tema_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Tema", 
                key: "id"
                }
            
            },
            dominio_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Dominio", 
                key: "id"
                }
            },
            mecanica_id:  {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                model: "Mecanica", 
                key: "id"
                }
            },
            foto:{
                type: DataTypes.STRING(500),
                allowNull: true
            }
            
        },{
            tableName: "jogo",
            timestamps: false
        }

    );
    jogo.associate = (models) => {
        jogo.belongsTo(models.Tema, {foreignKey: 'tema_id', as:'tema'})
        jogo.belongsTo(models.Dominio, {foreignKey: 'dominio_id', as:'dominio'})
        jogo.belongsTo(models.Mecanica, {foreignKey: 'mecanica_id', as:'mecanica'})
    }
    return jogo;
}

module.exports = Jogo;