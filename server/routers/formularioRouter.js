import { Router } from "express"
import formularioController from '../controllers/formularioController.js'

const router = new Router()

// Rota inicial da aplicação, por ela se pede a lista de perguntas
router.get('/', formularioController.listaPerguntas)

/*
Deve-se criar a rota POST que recebe os 
valores do formulário e devolve as violencias
sofridas para o front end
*/

export default router