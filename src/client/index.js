"use strict";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import { Layout } from './components';
import { Home, Blog, NotFound } from './containers';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
        , document.querySelector("#app")
    );
});
