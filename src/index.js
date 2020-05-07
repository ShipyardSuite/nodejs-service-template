const express = require('express')
const { exampleFunction } = require('./example');

const app = express()
const port = 3000
const serviceName = exampleFunction();

app.get('/', (req, res) => res.send(`Hello from ${serviceName}!`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))