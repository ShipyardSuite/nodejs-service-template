import express from 'express';
import winston from "winston";
import Redis from "winston-redis";
import fs from 'fs';
import path from 'path';

import { exampleFunction } from "./utils/example";

import { LoggerConfig, DBConfig } from "./config";

import { routes } from "./api";

class App {
    constructor() {
        this.app = express();
        this.serviceName = 'test';
        this.servicePort = process.env.SERVICE_PORT || 3000;
        this.database = process.env.DATABASE_URL || 'mongodb://mongo:27017/db';
        this.logger = {};
        this.path = { public: path.resolve(`${__dirname}/../client/`) };
    }

    init() {
        this.config();
        this.apiRoutes();
        this.reactRoutes();
        this.start();
    }

    config() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(`/${this.serviceName}/public`, express.static(this.path.public));

        const dBConfig = new DBConfig(this.database);

        const loggerConfig = LoggerConfig;

        this.logger = winston.createLogger({
            format: winston.format.timestamp(),
            defaultMeta: loggerConfig.meta,
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.timestamp(loggerConfig.timestamp),
                        winston.format.colorize(),
                        winston.format.simple(),
                        winston.format.printf(
                            (info) => `${info.timestamp} | ${info.level} | ${info.service} | ${info.message}`
                        )
                    )
                }),
                new Redis(loggerConfig.redis)
            ]
        });
    }

    apiRoutes() {
        routes.hello(this.app, this.logger, this.serviceName);
    }

    reactRoutes() {
        this.app.get('*/', (req, res) => {
            const content = fs.readFileSync(`${this.path.public}/index.html`).toString();
            res.set('content-type', 'text/html');
            res.send(content);
            res.end();
        });
    }

    start() {
        this.app.listen(this.servicePort, () => {
            console.log(`server started on port ${this.servicePort}`);
        });
    }
}

const application = new App();
application.init();
