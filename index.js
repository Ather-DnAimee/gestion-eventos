import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send('Bienvenido')
})

app.listen(3000)
console.log('Server is http://localhost:3000')