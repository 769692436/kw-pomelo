"use strict";

exports = (app) => {
    return new Handler(app);
};

class Handler {
    private app;

    constructor(app) {
        this.app = app;
    }

    public entry(msg, session, next) {
        
    }

}