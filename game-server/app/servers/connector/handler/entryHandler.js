"use strict";
exports = (app) => {
    return new Handler(app);
};
class Handler {
    constructor(app) {
        this.app = app;
    }
}
