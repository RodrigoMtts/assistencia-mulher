import { Router } from "express"
import formulario from './formularioRouter.js'

const router = new Router()

//importa as rotas de formularioController
router.use(formulario)

//Envia um código de sucesso quando for pedido o favicon.ico
router.get('/favicon.ico', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' })
    res.end('')
})

export default router