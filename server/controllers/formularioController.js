import db from '../respositories/formularioRepository.js'
import databaseInsert from '../utils/databaseInsert.js'

const formularioController = {
    /*
    Método que pede ao formularioRepository a
    lista de perguntas e devolve ao usuário
    */
    async listaPerguntas(req, res) {
        /*
        Insere a listra de perguntas no banco de dados
        quando elas não existem
        */
        await databaseInsert()

        //lista as perguntas no banco de dados
        db.listaPerguntas().then((perguntas) => {
            res.status(200).json(perguntas)
        })
    }
    /*
    Deve-se criar o método que chama formuilarioRepository para 
    armazenar no banco de dados a resposta enviada pelo usuário
    */
}

export default formularioController