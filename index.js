const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

            if (req.url === '/') {
                res.end(path.join(__dirname, 'public', 'index.html'), (err, data) => {
                        if (err) {
                            throw err
                        }
                        res.writeHead(200, {
                            'Content-Type': 'text/html'
                        })
                    }
                }
            })


        server.listen(3000, () => { console.log('Server is working...') }