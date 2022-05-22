import { Router } from "express"
import formularioController from '../controllers/formularioController.js'

const router = new Router()

// Rota inicial da aplicação, por ela se pede a lista de perguntas
router.get('/', formularioController.listaPerguntas)
// Rota que recebe as respostas
router.post('/resposta', formularioController.gravaResposta)

export default router