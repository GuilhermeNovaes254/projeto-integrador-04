const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);
const { Dominio } = require('../models');


async () => {
    const dominios = await Dominio.findAll();
    console.log(dominios);
  }