const express = require('express')
const { exampleFunction } = require('./utils/example');

const app = express()
const serviceName = exampleFunction();
const servicePort = process.env.SERVICE_PORT;

app.get('/', (req, res) => res.send(`Hello from ${serviceName}!`))

app.listen(servicePort, () => console.log(`Example app listening at http://localhost:${servicePort}`))