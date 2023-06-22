"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderBox = void 0;
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var template = require("./borderBox.html");
var BorderBox = (function () {
    function BorderBox() {
    }
    BorderBox = tslib_1.__decorate([
        (0, aurelia_framework_1.customElement)("border-box"),
        (0, aurelia_framework_1.inlineView)(template)
    ], BorderBox);
    return BorderBox;
}());
exports.BorderBox = BorderBox;
//# sourceMappingURL=borderBox.js.map