"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var nameCard_1 = require("./nameCard");
function configure(config) {
    config.globalResources([nameCard_1.NameCard]);
    config.aurelia.use.plugin(aurelia_framework_1.PLATFORM.moduleName('@common/ui'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map