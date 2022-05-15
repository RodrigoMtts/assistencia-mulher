//Manipulador de erros genéricos
const appController = {
  handleError(err, req, res, next) {
    if (err.status !== 404) console.log(err.stack)
    res.status(err.status || 500).json({ err: err.message })
  }
}

export default appController