import db from '../respositories/formularioRepository.js'
import databaseInsert from '../utils/databaseInsert.js'
import formulario from '../models/formularioModel.js'

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
        db.listaPerguntas()
            .then((perguntas) => {
                res.status(200).json(perguntas)
            })
            .catch((err) => {
                console.log("Erro: ControllerFormulario.ListaPerguntas " + err)
                res.status(500).json({Erro: "Algo deu errado, tente mais tarde"})
            })
    },
    /*
    Método que chama formuilarioRepository para 
    armazenar no banco de dados as Violências sofridas
    */
    gravaResposta(req, res) {
        try{
        db.gravaResposta(formulario.geraResposta(req.body))
            .then(() => {
                res.status(201).json(formulario.geraResposta(req.body))
            })
            .catch((err) => {
                console.log("Erro: ControllerFormulario.gravaResposta " + err)
                res.status(500).json({Erro: "Algo deu errado, tente mais tarde"})
            })
        }catch(err){
            res.status(415).json({ Error: "Formato de dados errado" })
        }
    }
}

export default formularioController