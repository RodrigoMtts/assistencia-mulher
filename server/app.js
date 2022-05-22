import express from "express"
import bodyParser from "body-parser"
import routes from "./routers/indexRouter.js"
import appController from "./controllers/appController.js"

//Inicializa o express 
const app = express()

//CORS: libera acesso a sistemas em outros domínios
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

//body parser: Transforma os dados da requisição em um objeto json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Carregando rotas do arquivo indexRouter
app.use(routes)

//Manipulador de erro genérico
app.use(appController.handleError)

//exporta o objeto app
export default app