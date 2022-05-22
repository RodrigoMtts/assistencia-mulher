import { Sequelize, DataTypes } from "sequelize"
import config from 'config'

const connection = new Sequelize(
  config.mySql.database,
  config.mySql.user,
  config.mySql.password,
  {
    host: config.mySql.hostname,
    dialect: config.mySql.dialect
  }
)

const perguntaDB = connection.define('perguntas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true
  },
  pergunta: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const respostaDB = connection.define('respostas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  resposta: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default {perguntaDB, respostaDB}