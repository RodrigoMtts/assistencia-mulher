import db from '../databases/mysql.js'

const formularioRepository = {
  //Método que pega as peruntas do formualário
  listaPerguntas() {
    return db.findAll({ attributes: ['id', "pergunta"] }).then()
  }
  /*Deve-se criar o método que adcionar os valores do formulário
  no banco de dados*/
}

export default formularioRepository