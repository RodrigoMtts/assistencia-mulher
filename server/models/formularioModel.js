//Arquivo onde  o método de verificação de violencia sofrida deve está
const formualario = {
  geraResposta(respostas){
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
    return [...new Set(violencias)].join();
  }
}

export default formualario