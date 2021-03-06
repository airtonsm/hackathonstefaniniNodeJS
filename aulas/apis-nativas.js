/**importa um modulo para ser utilizado
 * na nossa implementação
 */
const http = require('http')

const host = '127.0.0.1'
const port = '3000' /**porta default */
const url = `http://${host}:${port}`

const server=  http.createServer((req, resp)=> {
    /**200 = sucesso
     * 500 = error servidor
     * 404 = pagina não encontrada
     */
    resp.statusCode = 200
    resp.setHeader('Content-Type', 'text/html')
    resp.end('<h1>Ola Galera!! </br> Aqui estamos no curso de NodeJS!!!</h1>')
})

server.listen(port, host, ()=>{
    console.log(`'Server: ${url} is running'`)
})