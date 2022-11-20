import mysql from 'mysql2'
import db from '../databases/mysql.js'
import config from 'config'

//Conecta ao MySQL
const connection = mysql.createConnection({
    host: config.mySql.hostname,
    user: config.mySql.user,
    password: config.mySql.password,
});

//Cria o banco caso não exista
connection.query(
    `CREATE DATABASE IF NOT EXISTS assistencia_mulher`,
    function (err, results) {
        console.log(results);
        console.log(err);
    }
);

//Perguntas que serão inseridas no Banco
const perguntas = [
    { id: 0, pergunta: "Sou agredida fisicamente" },
    { id: 1, pergunta: "Sou violentada" },
    { id: 2, pergunta: "Já fui amarrada" },
    { id: 3, pergunta: "Já fui empurrada" },
    { id: 4, pergunta: "Não posso trabalhar" },
    { id: 5, pergunta: "São ocultados bens e propriedades de mim" },
    { id: 6, pergunta: "Não posso fazer certos tipos de compras" },
    { id: 7, pergunta: "São espalhadas notícias falsas sobre mim" },
    { id: 8, pergunta: "Sou difamada" },
    { id: 9, pergunta: "Sou isolada de outras pessoas" },
    { id: 10, pergunta: "Não posso ver minha família" },
    { id: 11, pergunta: "Não posso usar métodos contraceptivos" },
    { id: 12, pergunta: "Sou forçada a fazer sexo" }
]

//Método que será chamado no Controllher para criar as tabelas e inserir as perguntas
const databaseInsert = () => {
    db.perguntaDB.sync().then(() => {
        db.perguntaDB.findAndCountAll()
            .then(result => {
                db.respostaDB.sync() // Cria a tabela resposta
                if (result.count === 0) {
                    perguntas.forEach(p => {
                        db.perguntaDB.create(p)
                    })
                }
            })
    })
}

export default databaseInsert