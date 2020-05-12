const express = require("express");
const { exampleFunction } = require("./utils/example");

const app = express()
const serviceName = exampleFunction();
const servicePort = process.env.SERVICE_PORT;

app.get("/", (req, res) => {
    res.send(`Hello from ${serviceName}!`)
});

app.get("/health", (req, res) => {
    res.json({
        "statusCode": 200,
        "status": "OK"
    })
});

app.listen(servicePort);