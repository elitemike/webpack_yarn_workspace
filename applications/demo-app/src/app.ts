import { LogManager } from "aurelia-framework";
import { Logger } from "aurelia-logging";
import { MathHelpers } from "@common/utilities";

const logger: Logger = LogManager.getLogger("App");
export class App {
  public message = 'Hello World!';
  counter = 0;

  attached() {
    logger.debug("attached");
  }

  onButtonClick() {
    this.counter = MathHelpers.add(5, this.counter);
  }
}
