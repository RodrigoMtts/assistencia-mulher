import db from '../databases/mysql.js'

const formularioRepository = {
    //Método que pega as peruntas do formualário
    listaPerguntas() {
        return db.perguntaDB.findAll({ attributes: ['id', "pergunta"] })
            .then()
            .catch((err) => {
                throw new Error("Erro na hora de listar Peguntas: " + err)
            })
    },
    //Método que adiciona as violências sofridas no banco de dados
    gravaResposta(resposta){
        return db.respostaDB.create({resposta})
            .then()
            .catch((err) => {
                throw new Error("Erro na hora de gravar Peguntas: " + err)
            })
    }
}

export default formularioRepository