import express from "express"
import bodyParser from "body-parser"
import routes from "./routers/indexRouter.js"
import appController from "./controllers/appController.js"

//Inicializa o express  NÃO DEVE SER REMVIDO DAQUI
const app = express()

//CORS: libera acesso a sistemas em outros domínios  NÃO DEVE SER REMVIDO DAQUI
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

//body parser: Transforma os dados da requisição em um objeto json  NÃO DEVE SER REMVIDO DAQUI
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Carregando rotas do arquivo indexRouter NÃO DEVE SER REMVIDO DAQUI
app.use(routes)

// Banco falso deve sere substituido pelo real
const banco = []

/*
Esse endpoint deve ser transférido para o arquivo formularioRouter.js
A sua unica função deve ser chamar um método do formularioController
*/
app.post("/resposta", (req, res) => {
    const obj = req.body

    //a operação de guardar no banco de dados deve está em formulárioRepository
    banco.push(obj)

    // As duas linhas abaixo serão desnecessárias
    const respostas = banco[banco.length - 1]
    let violencias = []

    // Lógica de descobrir qual violência foi sofrida, deve ficar na pasta model
    Object.keys(respostas).forEach(e => {
        if ((e >= 0 && e < 4) && (respostas[e] === "on")) {
            violencias.push("fisica")
        } else if ((e >= 4 && e < 7) && (respostas[e] === "on")) {
            violencias.push("financeira")
        } else if ((e >= 7 && e < 11) && (respostas[e] === "on")) {
            violencias.push("psicologica")
        } else if ((e >= 11 && e < 13) && (respostas[e] === "on")) {
            violencias.push("sexual")
        } else {
            // Caso o formato dos dados da requisição esteja errado
            res.status(415).json({ Error: "Formato de dados errado" })
        }
    })
    // Envia quais violências foram sofridas
    let distintos = [...new Set(violencias)];
    res.status(201).json(distintos.join())
})

//Manipulador de erro genérico NÃO DEVE SER REMVIDO DAQUI
app.use(appController.handleError)

//exporta o objeto app  NÃO DEVE SER REMVIDO DAQUI
export default app