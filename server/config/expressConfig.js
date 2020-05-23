"use strict";

import express from "express";

class ExpressConfig {
    constructor(app) {
        app.use(require("express").urlencoded({ extended: true }));
        app.use(require("express").json());

    }
}

export default ExpressConfig;
