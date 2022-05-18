import { Sequelize, DataTypes } from "sequelize"

const connection = new Sequelize("assistencia_mulher", "root", "adm123", {
    host: "localhost",
    dialect: "mysql"
})

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

export default perguntaDB