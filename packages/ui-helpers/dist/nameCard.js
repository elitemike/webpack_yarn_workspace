"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameCard = void 0;
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var template = require("./nameCard.html");
var NameCard = (function () {
    function NameCard() {
    }
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], NameCard.prototype, "name", void 0);
    NameCard = tslib_1.__decorate([
        (0, aurelia_framework_1.customElement)("name-card"),
        (0, aurelia_framework_1.inlineView)(template)
    ], NameCard);
    return NameCard;
}());
exports.NameCard = NameCard;
//# sourceMappingURL=nameCard.js.map