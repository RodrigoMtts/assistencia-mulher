import mysql from 'mysql2'
import perguntaDB from '../databases/mysql.js'

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "adm123",
});

connection.query(
    `CREATE DATABASE IF NOT EXISTS assistencia_mulher`,
    function (err, results) {
        console.log(results);
        console.log(err);
    }
);

const perguntas = [
    { id: 0, pergunta: "O seu companheiro te bate?" },
    { id: 1, pergunta: "O seu companheiro te violenta? " },
    { id: 2, pergunta: "O seu companheiro te amarra?" },
    { id: 3, pergunta: "O seu companheiro te empurra? " },
    { id: 4, pergunta: "O seu companheiro não te deixa trabalhar?" },
    { id: 5, pergunta: "O seu companheiro oculta bens e propriedades?" },
    { id: 6, pergunta: "O seu companheiro não te dá permissão para certas compras?" },
    { id: 7, pergunta: "O seu companheiro espalha notícias falsas sobre você? " },
    { id: 8, pergunta: "O seu companheiro te difama? " },
    { id: 9, pergunta: "O seu companheiro te isola? " },
    { id: 10, pergunta: "O seu companheiro te proíbe de ver sua família?" },
    { id: 11, pergunta: "O seu companheiro te nega o direito a métodos contraceptivos?" },
    { id: 12, pergunta: "O seu companheiro te pressiona a fazer sexo?" }
]
const databaseInsert = () => {
    perguntaDB.sync().then(() => {
        perguntaDB.findAndCountAll()
            .then(result => {
                if (result.count === 0) {
                    perguntas.forEach(p => {
                        perguntaDB.create(p)
                    })
                }
            })
    })
}

export default databaseInsert