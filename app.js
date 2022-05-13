const express = require("express")
const bodyParser = require("body-parser")

const app = express()

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



const banco = []

app.get("/", (req,res) => {
    res.json(
            [
                {id: 0, pergunta: "O seu companheiro te bate?", tipoVilolencia: "fisica"},
                {id: 1, pergunta: " O seu companheiro te violenta? ", tipoVilolencia: "fisica"},
                {id: 2, pergunta: "O seu companheiro te amarra?", tipoVilolencia: "fisica"},
                {id: 3, pergunta: " O seu companheiro te empurra? ", tipoVilolencia: "fisica"},
                {id: 4, pergunta: "O seu companheiro não te deixa trabalhar?", tipoVilolencia: "financeira"},
                {id: 5, pergunta: "O seu companheiro oculta bens e propriedades?", tipoVilolencia: "financeira"},
                {id: 6, pergunta: "O seu companheiro não te dá permissão para certas compras?", tipoVilolencia: "financeira"},
                {id: 7, pergunta: " O seu companheiro espalha notícias falsas sobre você? ", tipoVilolencia: "psicologica"},
                {id: 8, pergunta: " O seu companheiro te difama? ", tipoVilolencia: "psicologica"},
                {id: 9, pergunta: " O seu companheiro te isola? ", tipoVilolencia: "psicologica"},
                {id: 10, pergunta: "O seu companheiro te proíbe de ver sua família?", tipoVilolencia: "psicologica"},
                {id: 11, pergunta: "O seu companheiro te nega o direito a métodos contraceptivos?", tipoVilolencia: "sexual"},
                {id: 12, pergunta: "O seu companheiro te pressiona a fazer sexo?", tipoVilolencia: "sexual"}
            ]
        )
})

app.post("/resposta", (req,res) => {
    const obj = req.body
    // console.log(obj)
    banco.push(obj)
    res.send()
})

app.get("/lista", (req,res) => {
    res.json(banco)
})

app.get("/violencias", (req,res) => {
    console.log("/violencias INICIO")
    const respostas = banco[banco.length - 1]
    console.log("respostas")
    console.log(respostas)
    let violencias = []
    
    Object.keys(respostas).forEach( e => {
        console.log(e + " keys")
        console.log(respostas[0] + " resposta 0")


        if((e >= 0 && e < 4) && (respostas[e] === "on") ){
            violencias.push("fisica")
        }else if((e >= 4 && e < 7) && (respostas[e] === "on")){
            violencias.push("financeira")
        }else if((e >= 7 && e < 11) && (respostas[e] === "on")){
            violencias.push("psicologica")
        }else if((e >= 11 && e < 13) && (respostas[e] === "on")){
            violencias.push("sexual")
        }
    })
    // const json1 = JSON.stringify(Array.from(violencias));
    console.log(violencias + " violencias")
    console.log([...new Set(violencias)])
    // console.log(json1)
    console.log("/violencias TERMINO")
    res.json([...new Set(violencias)])   
})

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080 \\0/")
})