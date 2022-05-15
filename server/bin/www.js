import app from '../app.js'

//Inicializa o servidor
const server = app.listen(8080, () => console.log('Servidor iniciado'))
server.on('error', (err) => console.log(err))