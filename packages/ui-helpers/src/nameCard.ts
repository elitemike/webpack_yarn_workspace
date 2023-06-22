import { customElement, inlineView, bindable } from "aurelia-framework";
const template = require("./nameCard.html");

@customElement("name-card")
@inlineView(template)
export class NameCard {
    @bindable public name;

}
