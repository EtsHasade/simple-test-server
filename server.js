
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*'
}))

app.set('trust proxy', 'linklocal')

let count = 0
app.get('/', function (req, res) {
    console.log('GET request', ++count)
    res.json({ msg: 'Hello World' })
})


const ipList = [
    'fe80::11f5:8c96:8e34:873d%11',
    '192.168.137.1',
    '192.168.1.6'
]

ipList.forEach(ip => {
    app.listen(3000, ip, () => {
        console.log(`Server os listening to:`, ip)
    })
})