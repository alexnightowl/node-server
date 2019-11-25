const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })
    if (req.url === '/contact') {
        res.end('<h1>Contact</h1>')
    } else if (req.url === '/') {
        res.end('<h1>Home</h1>')
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})